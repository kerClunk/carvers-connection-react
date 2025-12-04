import React, { useState } from 'react';
import { MapPin, Mail, Youtube, MessageSquare, Send } from 'lucide-react';
import Button from '../components/Button';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 1500);
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 25px 25px, #FF4500 2px, transparent 0)',
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-display text-5xl md:text-6xl font-bold text-white uppercase mb-6">
                        Get in <span className="text-brand-accent">Touch</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Questions about gear, coaching, or just want to connect with fellow carvers? We'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 bg-brand-gray">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="font-display text-3xl font-bold text-brand-dark uppercase mb-6">
                                    Contact Details
                                </h2>
                                <p className="text-brand-muted leading-relaxed mb-8">
                                    Whether you're looking for specific carving equipment, want to join our community,
                                    or have questions about coaching services, reach out and we'll get back to you.
                                </p>
                            </div>

                            {/* Info Cards */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="flex-shrink-0 w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-brand-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-brand-dark mb-1">Location</h3>
                                        <p className="text-brand-muted">Revelstoke, BC, Canada</p>
                                        <p className="text-sm text-gray-400 mt-1">Based in the mountains. Riding everywhere.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="flex-shrink-0 w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-brand-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-brand-dark mb-1">Email</h3>
                                        <a href="mailto:clunk@carversconnection.com" className="text-brand-accent hover:underline">
                                            clunk@carversconnection.com
                                        </a>
                                        <p className="text-sm text-gray-400 mt-1">For general inquiries and support</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="flex-shrink-0 w-12 h-12 bg-brand-dark/10 rounded-lg flex items-center justify-center">
                                        <MessageSquare className="w-6 h-6 text-brand-dark" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-brand-dark mb-1">Community</h3>
                                        <p className="text-brand-muted">Join our forum for discussions, tips, and camaraderie.</p>
                                        <a href="https://carving.clunk.tech/community" className="text-brand-accent hover:underline text-sm mt-1 inline-block">
                                            Visit Group Therapy →
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="pt-8 border-t border-gray-200">
                                <h3 className="font-display text-lg font-bold text-brand-dark uppercase mb-4">Follow Us</h3>
                                <div className="flex gap-4">
                                    <a
                                        href="https://www.youtube.com/@cherrycarves"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-brand-dark text-white rounded-lg flex items-center justify-center hover:bg-brand-accent transition-colors"
                                    >
                                        <Youtube className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100">
                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-brand-dark mb-2">Message Sent!</h3>
                                    <p className="text-brand-muted">Thanks for reaching out. We'll get back to you soon.</p>
                                </div>
                            ) : (
                                <>
                                    <h2 className="font-display text-2xl font-bold text-brand-dark uppercase mb-6">
                                        Send a Message
                                    </h2>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-bold text-brand-dark mb-2">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                                                placeholder="John Carver"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-bold text-brand-dark mb-2">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-bold text-brand-dark mb-2">
                                                Subject
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                                            >
                                                <option value="">Select a topic...</option>
                                                <option value="gear">Gear Inquiry</option>
                                                <option value="coaching">Coaching Services</option>
                                                <option value="register-coach">Register as a Coach</option>
                                                <option value="community">Community / Forum</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-bold text-brand-dark mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all bg-gray-50 focus:bg-white resize-none"
                                                placeholder="Tell us how we can help..."
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            variant="primary"
                                            fullWidth
                                            disabled={isSubmitting}
                                            className="group"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center gap-2">
                                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                    </svg>
                                                    Sending...
                                                </span>
                                            ) : (
                                                <span className="flex items-center gap-2">
                                                    Send Message
                                                    <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            )}
                                        </Button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
