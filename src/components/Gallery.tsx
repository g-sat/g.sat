import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713',
      title: 'Code in Action'
    },
    {
      url: 'https://images.unsplash.com/photo-1550439062-609e1531270e',
      title: 'Tech Innovation'
    },
    {
      url: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1',
      title: 'Digital Art'
    },
    {
      url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      title: 'Binary World'
    },
    {
      url: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0',
      title: 'Cyberpunk City'
    },
    {
      url: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
      title: 'Code Poetry'
    }
  ];

  return (
    <section ref={sectionRef} id="gallery" className="min-h-screen py-20 relative overflow-hidden">
      <div className="cyber-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-purple-900/20 to-black/50" />
      
      <div className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
        <h2 className="text-5xl font-bold mb-12 text-center glitch-text">Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cyber-image border-0"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <h3 className="text-xl font-bold p-4 w-full text-center neon-text">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;