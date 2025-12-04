import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import HeaderEmbed from './HeaderEmbed';
import './embed.css';

// Extend Window interface to include WordPress data and jQuery
declare global {
  interface Window {
    ccHeaderData?: {
      cartCount?: number;
      cartUrl?: string;
      logoUrl?: string;
      siteUrl?: string;
      currentPath?: string;
    };
    jQuery?: typeof jQuery;
  }
}

// Store the React root for updates
let reactRoot: Root | null = null;
let currentCartCount = 0;

/**
 * Initialize the header component
 */
function initHeader() {
  const container = document.getElementById('cc-header-root');
  if (!container) {
    console.warn('CC Header: #cc-header-root element not found');
    return;
  }

  // Get initial data from WordPress
  const wpData = window.ccHeaderData || {};
  currentCartCount = wpData.cartCount || 0;

  // Render the header
  reactRoot = createRoot(container);
  renderHeader(currentCartCount);

  // Set up WooCommerce cart fragment listeners for real-time updates
  setupCartListeners();

  console.log('CC Header: Initialized', { cartCount: currentCartCount });
}

/**
 * Render or re-render the header with current cart count
 */
function renderHeader(cartCount: number) {
  if (!reactRoot) return;

  const wpData = window.ccHeaderData || {};

  reactRoot.render(
    <React.StrictMode>
      <HeaderEmbed
        cartCount={cartCount}
        cartUrl={wpData.cartUrl || '/cart/'}
        logoUrl={wpData.logoUrl}
        siteUrl={wpData.siteUrl}
        currentPath={wpData.currentPath || window.location.pathname}
      />
    </React.StrictMode>
  );
}

/**
 * Update cart count and re-render
 */
function updateCartCount(newCount: number) {
  if (newCount !== currentCartCount) {
    currentCartCount = newCount;
    renderHeader(currentCartCount);
    console.log('CC Header: Cart updated', { cartCount: currentCartCount });
  }
}

/**
 * Set up listeners for WooCommerce cart updates
 */
function setupCartListeners() {
  // Check if jQuery is available (WooCommerce requires it)
  if (typeof window.jQuery === 'undefined') {
    console.log('CC Header: jQuery not available, cart updates disabled');
    return;
  }

  const $ = window.jQuery;

  // Listen for WooCommerce cart fragment refresh events
  // This fires when items are added/removed via AJAX
  $(document.body).on('wc_fragments_refreshed wc_fragments_loaded', function() {
    // Try to get cart count from WooCommerce fragments
    const cartCountEl = document.querySelector('.cart-contents-count, .woocommerce-mini-cart__total .amount');
    if (cartCountEl) {
      const count = parseInt(cartCountEl.textContent || '0', 10);
      if (!isNaN(count)) {
        updateCartCount(count);
        return;
      }
    }

    // Fallback: check the cart fragment data
    const fragments = (window as any).wc_cart_fragments_params;
    if (fragments && fragments.cart_contents_count !== undefined) {
      updateCartCount(parseInt(fragments.cart_contents_count, 10));
    }
  });

  // Listen for added_to_cart event (fires after AJAX add to cart)
  $(document.body).on('added_to_cart', function(_event: any, fragments: any, _cartHash: any, $button: any) {
    // WooCommerce passes fragments containing cart data
    if (fragments && fragments['.cart-contents-count']) {
      // Extract number from the fragment HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = fragments['.cart-contents-count'];
      const count = parseInt(tempDiv.textContent || '0', 10);
      if (!isNaN(count)) {
        updateCartCount(count);
      }
    }
  });

  // Listen for removed_from_cart event
  $(document.body).on('removed_from_cart', function() {
    // Decrement cart count (WooCommerce will refresh fragments which will update again)
    if (currentCartCount > 0) {
      updateCartCount(currentCartCount - 1);
    }
  });

  // Listen for cart page quantity updates
  $(document.body).on('updated_cart_totals', function() {
    // Re-read cart count from DOM after cart page update
    setTimeout(() => {
      const countEl = document.querySelector('.cart-contents-count');
      if (countEl) {
        const count = parseInt(countEl.textContent || '0', 10);
        if (!isNaN(count)) {
          updateCartCount(count);
        }
      }
    }, 100);
  });

  console.log('CC Header: WooCommerce cart listeners attached');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeader);
} else {
  initHeader();
}

// Expose update function for external use (e.g., custom cart implementations)
(window as any).ccHeaderUpdateCart = updateCartCount;
