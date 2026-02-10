import { motion } from 'framer-motion';

/**
 * Reusable Card Component for Memory Gallery
 * @param {Object} props - Component props
 * @param {string} props.image - Image URL
 * @param {string} props.caption - Caption text
 * @param {number} props.index - Card index for staggered animation
 */
const Card = ({ image, caption, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white p-2 glow-hover transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-valentine-rose/50">
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <img
            src={image}
            alt={caption}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Heart overlay on hover with glow effect */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-valentine-rose bg-opacity-30 backdrop-blur-sm"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="text-4xl sm:text-5xl md:text-6xl relative"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(255, 105, 180, 0.8)) drop-shadow(0 0 40px rgba(255, 20, 147, 0.6))',
                textShadow: '0 0 30px rgba(255, 105, 180, 1), 0 0 60px rgba(255, 20, 147, 0.8)'
              }}
            >
              ❤️
            </motion.span>
            {/* Additional glow rings */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 rounded-xl border-4 border-valentine-rose"
              style={{
                boxShadow: '0 0 30px rgba(255, 105, 180, 0.6), inset 0 0 30px rgba(255, 105, 180, 0.3)'
              }}
            />
          </motion.div>
        </div>
        <p className="mt-2 sm:mt-3 text-center text-valentine-dark font-medium text-xs sm:text-sm md:text-base px-1">
          {caption}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
