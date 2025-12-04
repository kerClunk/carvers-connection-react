import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Users, Globe } from 'lucide-react';
import Button from '../components/Button';
import { MISSION_TEXT } from '../constants';
import Logo from '../components/Logo';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="fixed inset-0 -z-10">
        <img src="/tracks4.webp" alt="" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-brand-gray/50"></div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/tracks4.webp"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover filter brightness-75"
          >
            <source src="/hero.m4v" type="video/mp4" />
            <source src="/hero.m4v" type="video/x-m4v" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
          <div className="max-w-4xl">

            <h1 className="font-display text-5xl md:text-7xl font-bold text-white uppercase italic leading-none mb-8 tracking-tight drop-shadow-lg">
              Destroying <br />
              <span className="text-brand-accent">Fresh Corduroy</span> <br />
              Wherever It's Found
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Link to="/store">
                <Button variant="primary">Shop Gear</Button>
              </Link>
              <Link to="/community">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark">Group Therapy</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stylistic Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-gray to-transparent"></div>
      </section>

      {/* Shop Teaser */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-secondary/10 rounded-full blur-3xl"></div>
                <img
                  src="https://picsum.photos/id/400/800/800"
                  alt="Featured product"
                  className="relative rounded-lg shadow-2xl rotate-3 transform hover:rotate-0 transition-all duration-500"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-display text-4xl font-bold text-brand-dark mb-6 uppercase">
                Explore Our <br />Snowboarding Emporium
              </h2>
              <p className="text-lg text-brand-muted mb-8 leading-relaxed">
                Browse the carefully curated collection of hardware you need but can't find anywhere else.
              </p>
              <Link to="/store">
                <Button variant="secondary" className="group">
                  Shop Now
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 transform translate-x-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-brand-dark mb-8 uppercase tracking-widest border-b-4 border-brand-accent inline-block pb-2">Mission Statement</h2>
            <p className="text-xl text-brand-text leading-relaxed whitespace-pre-wrap">
              {MISSION_TEXT}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-gray p-8 rounded-lg border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <Globe className="w-12 h-12 text-brand-accent mx-auto mb-4" />
              <div className="font-display text-4xl font-bold text-brand-dark mb-2">24+</div>
              <div className="text-sm font-bold uppercase text-brand-muted">Countries Reached</div>
            </div>
            <div className="bg-brand-gray p-8 rounded-lg border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-brand-secondary mx-auto mb-4" />
              <div className="font-display text-4xl font-bold text-brand-dark mb-2">500+</div>
              <div className="text-sm font-bold uppercase text-brand-muted">Community Members</div>
            </div>
            <div className="bg-brand-gray p-8 rounded-lg border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <Activity className="w-12 h-12 text-brand-dark mx-auto mb-4" />
              <div className="font-display text-4xl font-bold text-brand-dark mb-2">∞</div>
              <div className="text-sm font-bold uppercase text-brand-muted">Corduroy Destroyed</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;