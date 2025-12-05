import React from 'react';

interface GalleryImage {
    src: string;
    alt: string;
    span?: 'wide' | 'tall' | 'normal';
}

const images: GalleryImage[] = [
    { src: '/images/Oceano-Action-Shot11-2.webp', alt: 'Carving action shot at Oceano', span: 'wide' },
    { src: '/images/Smokies.jpg', alt: 'Snowboarding in the Smokies', span: 'tall' },
    { src: '/images/cropped-toeside-WB-2048x622.jpg', alt: 'Toeside carving', span: 'wide' },
    { src: '/images/cropped-best1-HS-SR.jpg', alt: 'Heelside carving on fresh corduroy' },
    { src: '/images/emilecantin_150.jpg', alt: 'Community member carving' },
];

const CommunityGallery: React.FC = () => {
    return (
        <section className="py-24 bg-brand-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-widest mb-4">
                        Our Community
                    </h2>
                    <div className="w-24 h-1 bg-brand-accent mx-auto mb-6"></div>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Carvers from around the world sharing their passion for destroying fresh corduroy.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`
                relative overflow-hidden rounded-lg group cursor-pointer
                ${image.span === 'wide' ? 'col-span-2' : ''}
                ${image.span === 'tall' ? 'row-span-2' : ''}
              `}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <p className="text-white text-sm font-medium">{image.alt}</p>
                                </div>
                            </div>
                            {/* Accent Border on Hover */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-accent rounded-lg transition-colors duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <a
                        href="https://carving.clunk.tech/community/"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-brand-accent text-white font-display uppercase font-bold rounded-lg hover:bg-brand-accent/90 transition-colors duration-300"
                    >
                        Join the Community
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CommunityGallery;
