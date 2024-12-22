import { motion } from 'framer-motion';
import { Artwork } from '../types/artwork';

interface ArtworkCardProps {
  artwork: Artwork;
}

export function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="relative group overflow-hidden rounded-lg bg-gray-900 border border-cyan-500/20"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          className="object-cover w-full h-full transform transition-transform group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2 text-cyan-400">{artwork.title}</h3>
          <p className="text-sm text-gray-300">{artwork.description}</p>
          <div className="mt-4 flex items-center gap-4">
            <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300">
              {artwork.category}
            </span>
            <span className="text-xs text-gray-400">{artwork.year}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}