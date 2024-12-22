import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-cyan-500/20"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-cyan-400"
          >
            <Palette className="w-6 h-6" />
            <span className="text-xl font-bold">Sathwik Garikapati's website</span>
          </motion.div>
          <nav>
            <ul className="flex items-center gap-8">
              {['Gallery', 'About', 'Contact'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.1, color: '#22d3ee' }}
                  className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}