import React, { useRef } from 'react';
import { Mail, Phone, MapPin, FileText, Github, Linkedin } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const contactInfo = [
    { icon: Mail, text: 'g.satl0107@gmail.com', href: 'mailto:g.satl0107@gmail.com' },
    { icon: Phone, text: '+91 63028 12213', href: 'tel:+916302812213' },
    { icon: MapPin, text: 'Guntur, Andhra Pradesh', href: '#' },
    { icon: Github, text: 'g-sat', href: 'https://github.com/g-sat' },
    { icon: Linkedin, text: 'sathwik-garikapati', href: 'https://www.linkedin.com/in/sathwik-garikapati-9937b1337/' }
  ];

  return (
    <main ref={sectionRef} className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      <div className="cyber-grid" />
      <div className="absolute inset-0 bg-[url('C:\Users\sathw\Desktop\project\src\assets\cp_1.jpg')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-purple-900/20 to-black/50" />
      
      <div className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
        <h1 className="text-5xl font-bold mb-12 text-center glitch-text">Contact Me</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="cyber-gradient p-8 rounded-lg backdrop-blur-lg">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-center gap-4 mb-6 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-lg">{text}</span>
                </a>
              ))}
            </div>

            <div className="cyber-gradient p-8 rounded-lg backdrop-blur-lg">
              <h3 className="text-2xl font-bold mb-4 neon-text">Download CV</h3>
              <a
                href="src\assets\Resume_inuse.pdf"
                download
                className="cyber-button inline-flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          <form className="cyber-gradient p-8 rounded-lg backdrop-blur-lg space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-black/30 border-2 border-cyan-500/30 rounded-lg p-3 text-white focus:border-pink-500/50 transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-black/30 border-2 border-cyan-500/30 rounded-lg p-3 text-white focus:border-pink-500/50 transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-black/30 border-2 border-cyan-500/30 rounded-lg p-3 text-white focus:border-pink-500/50 transition-colors duration-300"
              ></textarea>
            </div>
            <button type="submit" className="cyber-button w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;