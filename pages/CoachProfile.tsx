import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Mail, MapPin, Award, Calendar, ArrowLeft, CheckCircle, Play } from 'lucide-react';
import Button from '../components/Button';

interface CoachData {
    id: string;
    name: string;
    title: string;
    slug: string;
    email: string;
    image: string;
    coverImage: string;
    location: string;
    bio: string[];
    specialties: string[];
    experience: string;
    certifications: string[];
    sessionTypes: {
        name: string;
        description: string;
        price: string;
    }[];
    testimonials: {
        quote: string;
        author: string;
        location: string;
    }[];
    videoUrl?: string;
}

const coachesData: Record<string, CoachData> = {
    'james-cherry': {
        id: '1',
        name: 'James Cherry',
        title: 'Pro Carver & Instructor',
        slug: 'james-cherry',
        email: 'james@carversconnection.com',
        image: 'https://picsum.photos/id/1005/600/600',
        coverImage: 'https://picsum.photos/id/999/1920/600',
        location: 'Based in Colorado, USA',
        bio: [
            "James Cherry has been shredding the world's finest corduroy for over 15 years. What started as a weekend obsession quickly became a full-time pursuit of the perfect carve.",
            "After years of competitive carving and countless hours of self-study, James developed a unique teaching methodology that breaks down complex techniques into approachable, actionable steps.",
            "His YouTube channel has helped thousands of riders improve their carving technique, and his in-person coaching sessions are renowned for producing rapid, lasting improvements.",
        ],
        specialties: ['Technical Carving', 'Euro-Carves', 'Edge Control', 'Video Analysis', 'Equipment Setup', 'Binding Angles'],
        experience: '10+ years coaching experience',
        certifications: ['AASI Level 3', 'Carving Specialist Certification', 'Video Analysis Expert'],
        sessionTypes: [
            {
                name: 'Video Analysis',
                description: 'Send your footage, receive detailed breakdown and personalized drills.',
                price: 'From $75'
            },
            {
                name: 'Live Online Session',
                description: 'Real-time coaching via video call with screen sharing and analysis.',
                price: 'From $100/hr'
            },
            {
                name: 'On-Mountain Coaching',
                description: 'Full day of hands-on instruction and immediate feedback on the slopes.',
                price: 'From $500/day'
            }
        ],
        testimonials: [
            {
                quote: "James completely transformed my heelside carves. His eye for detail is incredible—he noticed things I never would have caught on my own.",
                author: "Mike R.",
                location: "Portland, OR"
            },
            {
                quote: "Worth every penny. After one session with James, I finally understood what I'd been doing wrong for years.",
                author: "Sarah K.",
                location: "Whistler, BC"
            }
        ],
        videoUrl: 'https://www.youtube.com/@cherrycarves'
    },
    'lord-bartron': {
        id: '2',
        name: 'Lord Bartron',
        title: 'Master Carver',
        slug: 'lord-bartron',
        email: 'bartron@carversconnection.com',
        image: 'https://picsum.photos/id/1012/600/600',
        coverImage: 'https://picsum.photos/id/1018/1920/600',
        location: 'Based in the Alps, Europe',
        bio: [
            "Good Day! Lord Bartron here. I've been carving since before it was cool—back when we had to hike for our turns and equipment was... let's say, 'character-building.'",
            "My approach to carving is holistic. It's not just about edge angles and body position—it's about feeling the mountain, reading the snow, and finding that state of flow where you and the board become one.",
            "I believe every carver has their own style waiting to emerge. My job isn't to make you carve like me—it's to help you discover and refine YOUR carving identity."
        ],
        specialties: ['Style & Flow', 'Body Position', 'Line Selection', 'All-Mountain Carving', 'Reading Terrain', 'Mental Approach'],
        experience: '20+ years on snow, 12+ years coaching',
        certifications: ['European Snowboard Instructor', 'Mountain Guide Certification', 'Flow State Specialist'],
        sessionTypes: [
            {
                name: 'Style Assessment',
                description: 'Comprehensive evaluation of your current technique and style potential.',
                price: 'From $100'
            },
            {
                name: 'Flow State Workshop',
                description: 'Multi-day intensive focused on mindset and mountain reading.',
                price: 'From $750'
            },
            {
                name: 'European Carving Camp',
                description: 'Week-long immersive experience in the Alps with daily coaching.',
                price: 'Contact for pricing'
            }
        ],
        testimonials: [
            {
                quote: "Bartron's philosophical approach sounded weird at first, but once I got it... everything clicked. My carving has never felt more natural.",
                author: "Alex T.",
                location: "Munich, Germany"
            },
            {
                quote: "The European Camp was life-changing. Not just for my carving, but for how I approach the mountain. Can't recommend enough.",
                author: "Yuki M.",
                location: "Tokyo, Japan"
            }
        ]
    }
};

const CoachProfile: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const coach = slug ? coachesData[slug] : null;

    if (!coach) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-brand-gray">
                <div className="text-center">
                    <h1 className="font-display text-4xl font-bold text-brand-dark mb-4">Coach Not Found</h1>
                    <p className="text-brand-muted mb-8">The coach you're looking for doesn't exist.</p>
                    <Link to="/coaching">
                        <Button variant="primary">View All Coaches</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-brand-gray">
            {/* Cover Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                    src={coach.coverImage}
                    alt={`${coach.name} cover`}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>

                {/* Back Button */}
                <Link
                    to="/coaching"
                    className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span className="font-bold text-sm uppercase tracking-wider">Back to Coaches</span>
                </Link>
            </div>

            {/* Profile Header */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 mb-8">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                            <img
                                src={coach.image}
                                alt={coach.name}
                                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-lg border-4 border-white"
                            />
                        </div>

                        {/* Info */}
                        <div className="flex-grow">
                            <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-dark mb-2">
                                {coach.name}
                            </h1>
                            <p className="text-brand-accent font-bold text-lg uppercase tracking-wider mb-4">
                                {coach.title}
                            </p>

                            <div className="flex flex-wrap gap-4 text-sm text-brand-muted mb-6">
                                <span className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-brand-accent" />
                                    {coach.location}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-brand-secondary" />
                                    {coach.experience}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a href={`mailto:${coach.email}`}>
                                    <Button variant="primary" className="group">
                                        <Mail className="w-4 h-4 mr-2" />
                                        Contact {coach.name.split(' ')[0]}
                                    </Button>
                                </a>
                                {coach.videoUrl && (
                                    <a href={coach.videoUrl} target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" className="group">
                                            <Play className="w-4 h-4 mr-2" />
                                            Watch Videos
                                        </Button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-16">
                    {/* Left Column - Bio & Testimonials */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Bio */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="font-display text-2xl font-bold text-brand-dark uppercase mb-6">About</h2>
                            <div className="space-y-4 text-brand-text leading-relaxed">
                                {coach.bio.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        {/* Session Types */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="font-display text-2xl font-bold text-brand-dark uppercase mb-6">Coaching Options</h2>
                            <div className="space-y-4">
                                {coach.sessionTypes.map((session, index) => (
                                    <div
                                        key={index}
                                        className="p-6 rounded-xl bg-brand-gray border border-gray-100 hover:border-brand-accent/30 transition-colors"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-bold text-brand-dark text-lg">{session.name}</h3>
                                            <span className="font-bold text-brand-accent">{session.price}</span>
                                        </div>
                                        <p className="text-brand-muted text-sm">{session.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Testimonials */}
                        {coach.testimonials.length > 0 && (
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h2 className="font-display text-2xl font-bold text-brand-dark uppercase mb-6">What Riders Say</h2>
                                <div className="space-y-6">
                                    {coach.testimonials.map((testimonial, index) => (
                                        <blockquote
                                            key={index}
                                            className="relative p-6 bg-brand-gray rounded-xl"
                                        >
                                            <div className="absolute top-4 left-4 text-6xl text-brand-accent/20 font-serif leading-none">"</div>
                                            <p className="relative text-brand-text italic mb-4 pl-8">
                                                {testimonial.quote}
                                            </p>
                                            <footer className="pl-8">
                                                <cite className="not-italic font-bold text-brand-dark">{testimonial.author}</cite>
                                                <span className="text-brand-muted text-sm ml-2">— {testimonial.location}</span>
                                            </footer>
                                        </blockquote>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-8">
                        {/* Specialties */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="font-display text-lg font-bold text-brand-dark uppercase mb-4">Specialties</h3>
                            <div className="space-y-3">
                                {coach.specialties.map((specialty) => (
                                    <div
                                        key={specialty}
                                        className="flex items-center gap-3 text-brand-text"
                                    >
                                        <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                        <span>{specialty}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="font-display text-lg font-bold text-brand-dark uppercase mb-4">Certifications</h3>
                            <div className="space-y-3">
                                {coach.certifications.map((cert) => (
                                    <div
                                        key={cert}
                                        className="flex items-center gap-3 text-brand-text"
                                    >
                                        <Award className="w-5 h-5 text-brand-secondary flex-shrink-0" />
                                        <span className="text-sm">{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Card */}
                        <div className="bg-gradient-to-br from-brand-dark to-slate-900 rounded-2xl shadow-lg p-8 text-white">
                            <h3 className="font-display text-xl font-bold uppercase mb-3">Ready to Level Up?</h3>
                            <p className="text-gray-300 text-sm mb-6">
                                Get in touch with {coach.name.split(' ')[0]} to discuss your goals and find the right coaching option for you.
                            </p>
                            <a href={`mailto:${coach.email}`}>
                                <Button variant="primary" fullWidth>
                                    Get Started
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoachProfile;
