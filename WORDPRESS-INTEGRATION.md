# WordPress Header Integration Guide

This guide explains how to embed the React header into your WordPress site (carving.clunk.tech).

## Files to Upload

Upload these files to your WordPress site at `/wp-content/uploads/cc-header/`:

```
dist-embed/cc-header.min.js   (205 KB)
dist-embed/cc-header.min.css  (11 KB)
public/LogoCC.webp            (8 KB)
```

## WordPress Integration

Add this to your child theme's `functions.php`:

```php
/**
 * Carvers Connection React Header Integration
 */

// Inject React header container at the very start of body
add_action('wp_body_open', function() {
    echo '<div id="cc-header-root"></div>';
}, 1);

// Enqueue the React header bundle
add_action('wp_enqueue_scripts', function() {
    // CSS
    wp_enqueue_style(
        'cc-header',
        content_url('/uploads/cc-header/cc-header.min.css'),
        [],
        '1.0.0'
    );

    // JavaScript
    wp_enqueue_script(
        'cc-header',
        content_url('/uploads/cc-header/cc-header.min.js'),
        [],
        '1.0.0',
        false // Load in head, not footer
    );

    // Pass WordPress/WooCommerce data to React
    $cart_count = 0;
    if (function_exists('WC') && WC()->cart) {
        $cart_count = WC()->cart->get_cart_contents_count();
    }

    wp_localize_script('cc-header', 'ccHeaderData', [
        'cartCount'   => $cart_count,
        'cartUrl'     => function_exists('wc_get_cart_url') ? wc_get_cart_url() : '/cart/',
        'siteUrl'     => home_url(),
        'logoUrl'     => content_url('/uploads/cc-header/LogoCC.webp'),
        'currentPath' => $_SERVER['REQUEST_URI'],
    ]);
}, 10);

// Hide GeneratePress header
add_action('wp_head', function() {
    echo '<style>
        /* Hide GeneratePress default header */
        .site-header,
        header.site-header,
        .main-navigation,
        #site-navigation,
        .navigation-branding,
        .gen-sidebar-nav {
            display: none !important;
        }

        /* Ensure React header is visible and at top */
        #cc-header-root {
            position: relative;
            z-index: 9999;
        }
    </style>';
}, 99);
```

## Testing

After adding the code:

1. Clear all caches (WordPress, Cloudflare, browser)
2. Visit the site and verify:
   - Header appears at top of page
   - Logo displays correctly
   - Navigation links work
   - Cart badge shows correct count
   - Mobile menu works (resize browser)
   - Dropdowns work on hover

## Cart Real-Time Updates

The header automatically listens for WooCommerce AJAX events:
- `wc_fragments_refreshed` - When cart fragments update
- `added_to_cart` - When item added via AJAX
- `removed_from_cart` - When item removed
- `updated_cart_totals` - When cart page quantities change

No additional configuration needed if WooCommerce AJAX cart is enabled.

## Manual Cart Update (Optional)

You can manually update the cart count from JavaScript:

```javascript
window.ccHeaderUpdateCart(5);  // Set cart count to 5
window.ccHeaderUpdateCart(0);  // Clear cart badge
```

## Customization

### Navigation Links

Edit `src/embed/HeaderEmbed.tsx` and modify the `NAV_LINKS` array:

```typescript
const NAV_LINKS = [
  { label: 'Home', path: '/', isExternal: false },
  { label: 'Forum', path: '/community/', isExternal: false },
  // Add more links...
];
```

Then rebuild: `npm run build:embed`

### Styling

The header uses Tailwind CSS with `cc-` prefix to avoid conflicts.
Edit `src/embed/HeaderEmbed.tsx` and rebuild.

## Troubleshooting

### Header not showing
- Check browser console for JavaScript errors
- Verify files uploaded to correct path
- Check that `wp_body_open` hook fires (modern themes only)

### CSS conflicts
- All Tailwind classes use `cc-` prefix
- CSS is scoped to `#cc-header-root`
- Check for `!important` overrides in theme

### Cart count wrong
- Verify WooCommerce is active
- Check `ccHeaderData` in browser console
- Ensure cart fragments are enabled in WooCommerce

### Old header still showing
- Add more specific CSS selectors to hide it
- Inspect element to find correct class names
- Check theme customizer for header options

## Rollback

To restore the original header:

1. Remove the code from `functions.php`
2. Clear caches
3. Original GeneratePress header will reappear

## Rebuilding

When you make changes to the header:

```bash
cd /home/clunk/Projects/carversConnection/new-site
npm run build:embed
```

Then re-upload `dist-embed/cc-header.min.js` and `dist-embed/cc-header.min.css`.
