<?php
/**
 * Carvers Connection React Header Integration
 */

// Enqueue parent styles
add_action( 'wp_enqueue_scripts', function() {
    wp_enqueue_style( 'generatepress-parent-style', get_template_directory_uri() . '/style.css' );
} );

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
