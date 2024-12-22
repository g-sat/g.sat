import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const nameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (nameRef.current) {
      observer.observe(nameRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="cyber-grid" />
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('C:\Users\sathw\Desktop\project\src\components\imgs\cp_M.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-black/50" />
      </div>

      <div className="container mx-auto px-6 py-24 text-center relative z-10">
        <div ref={nameRef} className="fade-in space-y-12">
          {/* Name with Glitch Effect */}
          <h1 className="text-6xl md:text-8xl font-bold glitch-text">
            Sathwik Garikapati
          </h1>

          {/* Profile Image with Cyber Effect */}
          <div className="w-48 h-48 mx-auto cyber-image group">
            <img
              src="\src\components\imgs\me.jpg"
              alt="Profile"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Title with Neon Effect */}
          <p className="text-xl md:text-2xl neon-text">
            Cyber Secutity (Pentesting)| DevOOPs
          </p>

          {/* CTA Button */}
          <button className="cyber-button">
            Explore My World
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;