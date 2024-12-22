import React, { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const projects = [
    {
      title: 'Project Alpha',
      description: 'A futuristic web application with neural interface',
      image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086',
      tags: ['React', 'Node.js', 'AI'],
    },
    {
      title: 'Cyber Beta',
      description: 'Next-gen blockchain visualization platform',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a',
      tags: ['Web3', 'TypeScript', 'Three.js'],
    },
    {
      title: 'Neural Net',
      description: 'Machine learning data visualization dashboard',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
      tags: ['Python', 'React', 'TensorFlow'],
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510906594845-bc082582c8cc')] bg-cover bg-center opacity-5" />
      
      <div className={`container mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <h2 className="text-5xl font-bold mb-12 text-center neon-text">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-lg cyber-card
                       backdrop-blur-lg bg-black/30 border border-cyan-500/30
                       hover:border-pink-500/50 transition-all duration-500
                       hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-cyan-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors">
                    <Github size={20} />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center gap-2 text-cyan-500 hover:text-cyan-400 transition-colors">
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;