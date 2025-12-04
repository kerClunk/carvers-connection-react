<?php
/**
 * Template Name: New Home Page
 *
 * @package CarversConnection
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title( '|', true, 'right' ); ?></title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Oswald:wght@500;700&display=swap" rel="stylesheet">
    
    <!-- Custom Styles -->
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/style-new-home.css">
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    
    <?php wp_head(); ?>
    
    <style>
        /* Ensure full height */
        html, body { margin: 0; padding: 0; height: 100%; }
        /* Mobile menu transition */
        #mobile-menu { transition: max-height 0.3s ease-in-out; overflow: hidden; max-height: 0; }
        #mobile-menu.open { max-height: 500px; }
    </style>
</head>
<body <?php body_class('font-sans text-brand-text bg-white'); ?>>

    <!-- Header -->
    <header class="sticky top-0 z-50 bg-brand-dark text-white border-b border-white/10 shadow-xl">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                
                <!-- Logo -->
                <div class="flex-shrink-0 flex items-center">
                    <a href="<?php echo home_url(); ?>" class="hover:opacity-90 transition-opacity font-display text-2xl font-bold italic tracking-tighter">
                        CARVERS<span class="text-brand-accent">CONNECTION</span>
                    </a>
                </div>

                <!-- Desktop Nav -->
                <nav class="hidden md:flex space-x-8 items-center">
                    <a href="<?php echo home_url('/store'); ?>" class="text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-brand-accent transition-colors">Shop</a>
                    <a href="<?php echo home_url('/community'); ?>" class="text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-brand-accent transition-colors">Group Therapy</a>
                </nav>

                <!-- Actions -->
                <div class="hidden md:flex items-center space-x-6">
                    <div class="relative group cursor-pointer flex items-center space-x-1 text-sm font-bold text-gray-300 hover:text-white">
                        <span>CAD</span>
                        <i data-lucide="chevron-down" class="w-4 h-4"></i>
                    </div>

                    <button class="text-gray-300 hover:text-white transition-colors">
                        <i data-lucide="search" class="w-5 h-5"></i>
                    </button>

                    <a href="<?php echo home_url('/cart'); ?>" class="relative text-gray-300 hover:text-brand-accent transition-colors">
                        <i data-lucide="shopping-cart" class="w-[22px] h-[22px]"></i>
                        <!-- Cart count placeholder -->
                    </a>
                </div>

                <!-- Mobile menu button -->
                <div class="md:hidden flex items-center">
                    <a href="<?php echo home_url('/cart'); ?>" class="relative text-gray-300 hover:text-brand-accent transition-colors mr-4">
                        <i data-lucide="shopping-cart" class="w-[22px] h-[22px]"></i>
                    </a>
                    <button id="mobile-menu-btn" class="text-gray-300 hover:text-white p-2">
                        <i data-lucide="menu" class="w-6 h-6"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="md:hidden bg-brand-dark border-t border-white/10">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="<?php echo home_url('/store'); ?>" class="block px-3 py-4 text-base font-bold uppercase text-white hover:bg-white/5 hover:text-brand-accent">Shop</a>
                <a href="<?php echo home_url('/community'); ?>" class="block px-3 py-4 text-base font-bold uppercase text-white hover:bg-white/5 hover:text-brand-accent">Group Therapy</a>
            </div>
        </div>
    </header>

    <div class="flex flex-col min-h-screen relative">
        <div class="fixed inset-0 -z-10">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/tracks4.webp" alt="" class="w-full h-full object-cover opacity-50" />
            <div class="absolute inset-0 bg-brand-gray/50"></div>
        </div>

        <!-- Hero Section -->
        <section class="relative h-[85vh] flex items-center justify-center overflow-hidden">
            <!-- Background Image -->
            <div class="absolute inset-0 z-0">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/tracks4.webp" alt="Background" class="w-full h-full object-cover" />
            </div>

            <!-- Background Video -->
            <div class="absolute inset-0 z-0">
                <video autoPlay muted loop playsInline class="w-full h-full object-cover filter brightness-75">
                    <source src="<?php echo get_stylesheet_directory_uri(); ?>/hero.m4v" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <!-- Overlay gradient -->
                <div class="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/40 to-transparent"></div>
            </div>

            <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
                <div class="max-w-4xl">
                    <h1 class="font-display text-5xl md:text-7xl font-bold text-white uppercase italic leading-none mb-8 tracking-tight drop-shadow-lg">
                        Destroying <br />
                        <span class="text-brand-accent">Fresh Corduroy</span> <br />
                        Wherever It's Found
                    </h1>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                        <a href="<?php echo home_url('/store'); ?>" class="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-sm text-white bg-brand-accent hover:bg-orange-700 transition-all duration-200 shadow-lg hover:shadow-orange-500/30 uppercase tracking-wider">
                            Shop Gear
                        </a>
                        <a href="<?php echo home_url('/community'); ?>" class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-bold rounded-sm text-white hover:bg-white hover:text-brand-dark transition-all duration-200 uppercase tracking-wider">
                            Group Therapy
                        </a>
                    </div>
                </div>
            </div>

            <!-- Stylistic Divider -->
            <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-gray to-transparent"></div>
        </section>

        <!-- Shop Teaser -->
        <section class="py-24">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div class="order-2 md:order-1">
                        <div class="relative">
                            <div class="absolute -inset-4 bg-brand-secondary/10 rounded-full blur-3xl"></div>
                            <img src="https://picsum.photos/id/400/800/800" alt="Featured product" class="relative rounded-lg shadow-2xl rotate-3 transform hover:rotate-0 transition-all duration-500" />
                        </div>
                    </div>
                    <div class="order-1 md:order-2">
                        <h2 class="font-display text-4xl font-bold text-brand-dark mb-6 uppercase">
                            Explore Our <br />Snowboarding Emporium
                        </h2>
                        <p class="text-lg text-brand-muted mb-8 leading-relaxed">
                            Browse the carefully curated collection of hardware you need but can't find anywhere else.
                        </p>
                        <a href="<?php echo home_url('/store'); ?>" class="group inline-flex items-center justify-center px-8 py-4 border-2 border-brand-dark text-base font-bold rounded-sm text-brand-dark hover:bg-brand-dark hover:text-white transition-all duration-200 uppercase tracking-wider">
                            Shop Now
                            <i data-lucide="arrow-right" class="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Mission Statement -->
        <section class="py-24 relative overflow-hidden">
            <!-- Background Decoration -->
            <div class="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 transform translate-x-20"></div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="max-w-4xl mx-auto text-center mb-16">
                    <h2 class="font-display text-4xl font-bold text-brand-dark mb-8 uppercase tracking-widest border-b-4 border-brand-accent inline-block pb-2">Mission Statement</h2>
                    <p class="text-xl text-brand-text leading-relaxed whitespace-pre-wrap">Carvers Connection was conceived both as a resource for SNOWBOARD CARVERS to get the equipment and knowledge they need to speed their progression, and as a force to push for R&D and competition in the snowboard industry at large by demonstrating that there is a viable and growing market for carving-specific gear.

Our mission is to UP the overall level and the number of snowboard carvers out there. We want to see more great tracks in the corduroy and spread some of that PURE ELATION that carvers are addicted to.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-brand-gray p-8 rounded-lg border border-gray-100 text-center hover:shadow-lg transition-shadow">
                        <i data-lucide="globe" class="w-12 h-12 text-brand-accent mx-auto mb-4"></i>
                        <div class="font-display text-4xl font-bold text-brand-dark mb-2">24+</div>
                        <div class="text-sm font-bold uppercase text-brand-muted">Countries Reached</div>
                    </div>
                    <div class="bg-brand-gray p-8 rounded-lg border border-gray-100 text-center hover:shadow-lg transition-shadow">
                        <i data-lucide="users" class="w-12 h-12 text-brand-secondary mx-auto mb-4"></i>
                        <div class="font-display text-4xl font-bold text-brand-dark mb-2">500+</div>
                        <div class="text-sm font-bold uppercase text-brand-muted">Community Members</div>
                    </div>
                    <div class="bg-brand-gray p-8 rounded-lg border border-gray-100 text-center hover:shadow-lg transition-shadow">
                        <i data-lucide="activity" class="w-12 h-12 text-brand-dark mx-auto mb-4"></i>
                        <div class="font-display text-4xl font-bold text-brand-dark mb-2">∞</div>
                        <div class="text-sm font-bold uppercase text-brand-muted">Corduroy Destroyed</div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <!-- Footer -->
    <footer class="bg-brand-dark text-white pt-16 pb-8 border-t-4 border-brand-accent">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                
                <!-- Brand -->
                <div class="space-y-4">
                    <a href="<?php echo home_url(); ?>" class="inline-block hover:opacity-90 transition-opacity font-display text-2xl font-bold italic tracking-tighter">
                        CARVERS<span class="text-brand-accent">CONNECTION</span>
                    </a>
                    <p class="text-gray-400 text-sm leading-relaxed">
                        Connection to Carvers. Destroying Fresh Corduroy Wherever it's Found.
                    </p>
                </div>

                <!-- Links -->
                <div>
                    <h4 class="font-display text-lg font-bold uppercase mb-6 tracking-wide text-brand-secondary">Credits</h4>
                    <ul class="space-y-3 text-sm text-gray-400">
                        <li>Content and photography by <a href="#" class="hover:text-white transition-colors underline decoration-brand-accent">Cherry Carves</a></li>
                        <li>Content and photography by <a href="#" class="hover:text-white transition-colors underline decoration-brand-accent">Martina Sochorova</a></li>
                        <li>Logo and animation by <a href="#" class="hover:text-white transition-colors underline decoration-brand-accent">Carver Arcalis</a></li>
                        <li>Background photos by <a href="#" class="hover:text-white transition-colors underline decoration-brand-accent">Happybob</a></li>
                        <li>Website by <a href="mailto:clunk@carversconnection.com" class="hover:text-white transition-colors underline decoration-brand-accent">clunk</a></li>
                    </ul>
                </div>

                <!-- Social / Contact -->
                <div>
                     <h4 class="font-display text-lg font-bold uppercase mb-6 tracking-wide text-brand-secondary">Connect</h4>
                     <div class="flex space-x-4">
                       <div class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent transition-colors cursor-pointer">
                          <i data-lucide="external-link" class="w-[18px] h-[18px]"></i>
                       </div>
                     </div>
                     <p class="mt-6 text-sm text-gray-500">
                       Based in the Mountains.<br/>
                       Riding everywhere.
                     </p>
                </div>
            </div>

            <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-xs text-gray-500">
                    &copy; <?php echo date('Y'); ?> CarversConnection. All rights reserved.
                </p>
                <div class="flex space-x-6 mt-4 md:mt-0">
                     <span class="text-xs text-gray-500 hover:text-white cursor-pointer">Privacy Policy</span>
                     <span class="text-xs text-gray-500 hover:text-white cursor-pointer">Terms of Service</span>
                </div>
            </div>
        </div>
    </footer>

    <!-- Initialize Lucide Icons -->
    <script>
        lucide.createIcons();
        
        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        
        if (btn && menu) {
            btn.addEventListener('click', () => {
                menu.classList.toggle('open');
            });
        }
    </script>

    <?php wp_footer(); ?>
</body>
</html>
