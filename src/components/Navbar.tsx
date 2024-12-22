import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Home, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="cosmic-nav fixed w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-cyan-400 font-bold text-xl hover-scale glitch-text">SG</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="nav-link flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            <Home className="cyber-icon" size={18} />
            <span className="glitch-hover">Home</span>
          </Link>
          <Link
            to="/contact"
            className="nav-link flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            <Mail className="cyber-icon" size={18} />
            <span className="glitch-hover">Contact</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-cyan-400 hover:text-pink-500 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} className="cyber-icon" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`
        md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        pt-20 px-6 cyber-gradient
      `}>
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="mobile-nav-link block py-4 text-xl text-gray-300 hover:text-cyan-400 transition-colors duration-300
                   border-b border-cyan-500/20 flex items-center space-x-4"
        >
          <Home size={24} className="cyber-icon" />
          <span className="glitch-hover">Home</span>
        </Link>
        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="mobile-nav-link block py-4 text-xl text-gray-300 hover:text-cyan-400 transition-colors duration-300
                   border-b border-cyan-500/20 flex items-center space-x-4"
        >
          <Mail size={24} className="cyber-icon" />
          <span className="glitch-hover">Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;