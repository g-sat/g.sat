import React, { useRef } from 'react';
import { Code2, Brain, Rocket } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const skills = [
    { icon: Code2, title: 'Development', desc: 'Full-stack development with modern technologies' },
    { icon: Brain, title: 'Problem Solving', desc: 'Creative solutions to complex challenges' },
    { icon: Rocket, title: 'Innovation', desc: 'Pushing boundaries with cutting-edge tech' }
  ];

  return (
    <section ref={sectionRef} id="about" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center opacity-5" />
      
      <div className={`container mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <h2 className="text-5xl font-bold mb-12 text-center neon-text">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="cyber-card p-8 backdrop-blur-lg bg-black/30 border border-cyan-500/30 rounded-lg hover:border-pink-500/50 transition-all duration-500">
            <p className="text-lg text-gray-300 leading-relaxed">
              A passionate developer diving deep into the digital realm. Crafting immersive experiences 
              and pushing the boundaries of what's possible in web development.
            </p>
          </div>

          <div className="grid gap-6">
            {skills.map(({ icon: Icon, title, desc }) => (
              <div 
                key={title}
                className="cyber-card p-6 backdrop-blur-lg bg-black/30 border border-cyan-500/30 rounded-lg
                         hover:border-pink-500/50 hover:-translate-y-1 transition-all duration-500
                         hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]"
              >
                <div className="flex items-center gap-4">
                  <Icon className="w-8 h-8 text-cyan-400" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                    <p className="text-gray-400">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;