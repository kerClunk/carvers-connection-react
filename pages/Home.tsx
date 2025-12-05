import React from 'react';
import { ArrowRight, Activity, Users, Globe } from 'lucide-react';
import Button from '../components/Button';
import { MISSION_TEXT } from '../constants';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section with Video */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                {/* Background Image Fallback */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/tracks4.webp"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Background Video */}
                <div className="absolute inset-x-0 bottom-0 top-2 md:top-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-contain object-top md:object-cover md:object-center filter brightness-75"
                    >
                        <source src="/hero.m4v" type="video/mp4" />
                        <source src="/hero.m4v" type="video/x-m4v" />
                        Your browser does not support the video tag.
                    </video>
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/40 to-transparent"></div>
                </div>

                <div className="absolute top-[33%] left-4 right-4 md:left-[66%] md:right-auto -translate-y-0 md:-translate-y-1/2 z-10 px-4 sm:px-6 lg:px-8 text-center md:text-left">
                    <div className="max-w-xl mx-auto md:ml-auto md:mr-0 flex flex-col">
                        <div className="flex flex-col-reverse sm:flex-row gap-4 justify-end order-1 md:order-2 mb-8 md:mb-0">
                            <a href="https://carving.clunk.tech/store">
                                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark">Shop Gear</Button>
                            </a>
                            <a href="https://carving.clunk.tech/community/">
                                <Button variant="primary">Group Therapy</Button>
                            </a>
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl font-bold text-white uppercase italic leading-none mb-8 tracking-tight drop-shadow-lg order-2 md:order-1">
                            Destroying <br />
                            <span className="text-brand-accent">Fresh Corduroy</span> <br />
                            Wherever It's Found
                        </h1>
                    </div>
                </div>

                {/* Stylistic Divider */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-dark to-transparent"></div>
            </section>

            {/* Full-Width Action Banner */}
            <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
                <img
                    src="/images/cropped-toeside-WB-2048x622.jpg"
                    alt="Toeside carving on fresh corduroy"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/70 via-brand-dark/30 to-transparent"></div>
                <div className="absolute top-[40%] -translate-y-1/2 left-0 right-0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase tracking-tight mb-4">
                            The Art of <span className="text-brand-accent">The Carve</span>
                        </h2>
                        <p className="text-xl text-gray-200 max-w-xl mb-6">
                            Master the turn. Feel the edge. Leave a perfect trench.
                        </p>
                    </div>
                </div>
                {/* Centered Button - offset left */}
                <div className="absolute bottom-16 md:bottom-20 left-[35%]">
                    <a href="https://carving.clunk.tech/community/">
                        <Button variant="primary" className="group">
                            Join the Community
                            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                </div>
            </section>

            {/* Shop Teaser with Real Photo */}
            <section className="py-24 bg-brand-gray">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-brand-secondary/20 rounded-full blur-3xl"></div>
                                <img
                                    src="/images/Oceano-Action-Shot11-2.webp"
                                    alt="Carver in action at Oceano"
                                    className="relative rounded-lg shadow-2xl rotate-2 transform hover:rotate-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="font-display text-4xl font-bold text-brand-dark mb-6 uppercase">
                                Explore Our <br />Snowboarding Emporium
                            </h2>
                            <p className="text-lg text-brand-muted mb-8 leading-relaxed">
                                Browse the carefully curated collection of hardware you need but can't find anywhere else. From wide boards to risers, we've got you covered.
                            </p>
                            <a href="https://carving.clunk.tech/store">
                                <Button variant="secondary" className="group">
                                    Shop Now
                                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Photo Feature with Stats */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden">
                {/* Background Photo */}
                <div className="absolute inset-0">
                    <img
                        src="/images/Smokies.jpg"
                        alt="Snowboarding in the Smokies"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-dark/60"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-widest mb-4">
                            Where Carvers Roam
                        </h2>
                        <div className="w-24 h-1 bg-brand-accent mx-auto mb-6"></div>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                            {MISSION_TEXT.split('\n')[0]}
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                            <Globe className="w-12 h-12 text-brand-accent mx-auto mb-4" />
                            <div className="font-display text-5xl font-bold text-white mb-2">24+</div>
                            <div className="text-sm font-bold uppercase text-gray-300 tracking-wider">Countries Reached</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                            <Users className="w-12 h-12 text-brand-secondary mx-auto mb-4" />
                            <div className="font-display text-5xl font-bold text-white mb-2">500+</div>
                            <div className="text-sm font-bold uppercase text-gray-300 tracking-wider">Community Members</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                            <Activity className="w-12 h-12 text-white mx-auto mb-4" />
                            <div className="font-display text-5xl font-bold text-white mb-2">∞</div>
                            <div className="text-sm font-bold uppercase text-gray-300 tracking-wider">Corduroy Destroyed</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compact Gallery Row */}
            <section className="py-16 bg-brand-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {/* Main action shot - spans 2 on mobile */}
                        <div className="col-span-2 md:col-span-1 relative overflow-hidden rounded-lg group aspect-[4/3]">
                            <img
                                src="/images/cropped-best1-HS-SR.jpg"
                                alt="Heelside carving"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-accent rounded-lg transition-colors duration-300"></div>
                        </div>

                        {/* Banner crop on right */}
                        <div className="col-span-2 relative overflow-hidden rounded-lg group aspect-[4/3] md:aspect-[16/9]">
                            <img
                                src="/images/cropped-toeside-WB-2048x622.jpg"
                                alt="Toeside carving panoramic"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-secondary rounded-lg transition-colors duration-300"></div>
                        </div>
                    </div>

                    {/* CTA below gallery */}
                    <div className="text-center mt-12">
                        <a
                            href="https://carving.clunk.tech/community/"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-white font-display uppercase font-bold rounded-lg hover:bg-brand-accent/90 transition-colors duration-300 text-lg"
                        >
                            Join the Community
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
