import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Award, Users, ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../components/Button';

interface Coach {
    id: string;
    name: string;
    title: string;
    slug: string;
    image: string;
    shortBio: string;
    specialties: string[];
}

const coaches: Coach[] = [
    {
        id: '1',
        name: 'James Cherry',
        title: 'Pro Carver & Instructor',
        slug: 'james-cherry',
        image: 'https://picsum.photos/id/1005/600/600',
        shortBio: 'Renowned for his technical precision and ability to break down complex carving techniques into digestible steps. James has been carving for over 15 years and coaching for 10.',
        specialties: ['Technical Carving', 'Euro-Carves', 'Edge Control', 'Video Analysis']
    },
    {
        id: '2',
        name: 'Lord Bartron',
        title: 'Master Carver',
        slug: 'lord-bartron',
        image: 'https://picsum.photos/id/1012/600/600',
        shortBio: 'Known throughout the carving community for his smooth, flowing style and deep understanding of board dynamics. Lord Bartron brings a zen-like approach to the art of carving.',
        specialties: ['Style & Flow', 'Body Position', 'Line Selection', 'All-Mountain Carving']
    }
];

const Coaching: React.FC = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-brand-accent/20 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-secondary/20 rounded-full filter blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                        <Mountain className="w-4 h-4 text-brand-accent" />
                        <span className="text-sm font-bold text-gray-300 uppercase tracking-wider">Level Up Your Carving</span>
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl font-bold text-white uppercase mb-6">
                        Expert <span className="text-brand-accent">Coaching</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                        Learn from the best in the carving world. Our coaches bring decades of combined experience
                        to help you master the art of destroying fresh corduroy.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/contact">
                            <Button variant="primary">Register as a Coach</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Coaching Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-brand-dark uppercase mb-4">
                            Why Get <span className="text-brand-accent">Coached?</span>
                        </h2>
                        <p className="text-brand-muted text-lg max-w-2xl mx-auto">
                            There's a ceiling you'll hit carving on your own. Break through it with expert guidance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <Award className="w-8 h-8 text-brand-accent" />
                            </div>
                            <h3 className="font-display text-xl font-bold text-brand-dark uppercase mb-3">Expert Feedback</h3>
                            <p className="text-brand-muted">
                                Get personalized analysis of your technique from carvers who've been there and mastered it.
                            </p>
                        </div>

                        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-16 h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <Mountain className="w-8 h-8 text-brand-secondary" />
                            </div>
                            <h3 className="font-display text-xl font-bold text-brand-dark uppercase mb-3">Faster Progression</h3>
                            <p className="text-brand-muted">
                                Skip the trial and error. Learn the right techniques from day one and progress exponentially faster.
                            </p>
                        </div>

                        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-16 h-16 bg-brand-dark/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <Users className="w-8 h-8 text-brand-dark" />
                            </div>
                            <h3 className="font-display text-xl font-bold text-brand-dark uppercase mb-3">Join the Community</h3>
                            <p className="text-brand-muted">
                                Connect with other dedicated carvers on the same journey. The stoke is contagious.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coaches Section */}
            <section className="py-20 bg-brand-gray">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-brand-dark uppercase mb-4">
                            Meet Our <span className="text-brand-accent">Coaches</span>
                        </h2>
                        <p className="text-brand-muted text-lg max-w-2xl mx-auto">
                            World-class instructors dedicated to elevating your carving to the next level.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {coaches.map((coach) => (
                            <div
                                key={coach.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    {/* Image */}
                                    <div className="relative h-64 md:h-full overflow-hidden">
                                        <img
                                            src={coach.image}
                                            alt={coach.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent md:bg-gradient-to-r"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <h3 className="font-display text-2xl font-bold text-brand-dark mb-1">
                                            {coach.name}
                                        </h3>
                                        <p className="text-brand-accent font-bold text-sm uppercase tracking-wider mb-4">
                                            {coach.title}
                                        </p>
                                        <p className="text-brand-muted text-sm leading-relaxed mb-6">
                                            {coach.shortBio}
                                        </p>

                                        {/* Specialties */}
                                        <div className="mb-6">
                                            <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider mb-3">Specialties</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {coach.specialties.map((specialty) => (
                                                    <span
                                                        key={specialty}
                                                        className="inline-flex items-center gap-1 text-xs font-medium bg-brand-gray px-3 py-1 rounded-full text-brand-text"
                                                    >
                                                        <CheckCircle className="w-3 h-3 text-brand-accent" />
                                                        {specialty}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <Link to={`/coaching/${coach.slug}`}>
                                            <Button variant="secondary" className="group/btn w-full md:w-auto">
                                                View Profile
                                                <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-brand-dark text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-display text-4xl font-bold uppercase mb-6">
                        Want to Share Your <span className="text-brand-accent">Knowledge?</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-10">
                        Are you an experienced carver with a passion for teaching?
                        Register your coaching services with Carvers Connection and reach riders worldwide.
                    </p>
                    <Link to="/contact">
                        <Button variant="primary" className="text-lg px-8 py-4">
                            Register Your Coaching Services
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Coaching;
