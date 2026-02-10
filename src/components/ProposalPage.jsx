import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * Proposal Page with interactive Yes/No buttons
 */
const ProposalPage = ({ onYes }) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noCount, setNoCount] = useState(0);

  const handleNoHover = () => {
    // Move button away on hover
    const maxDistance = 200;
    const angle = Math.random() * Math.PI * 2;
    setNoButtonPosition({
      x: Math.cos(angle) * maxDistance,
      y: Math.sin(angle) * maxDistance,
    });
    setNoCount(noCount + 1);
  };

  const handleYesClick = () => {
    onYes();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-valentine-light via-pink-50 to-valentine-pink relative overflow-hidden">
      {/* Floating hearts */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2 + Math.random(),
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="absolute text-2xl sm:text-3xl md:text-4xl opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          ❤️
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', damping: 15 }}
        className="text-center z-10"
      >
        <motion.h2
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-pacifico text-valentine-rose mb-6 sm:mb-8 md:mb-12 text-shadow px-2"
        >
          Will you be my Valentine? 💖
        </motion.h2>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-6 sm:mt-8 md:mt-12 w-full px-2">
          {/* Yes Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-full sm:w-auto"
          >
            <button
              onClick={handleYesClick}
              className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 bg-gradient-to-r from-valentine-rose to-valentine-red text-white rounded-full font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl shadow-2xl hover:shadow-3xl transform transition-all duration-300 glow text-shadow active:scale-95"
            >
              Yes 😍
            </button>
          </motion.div>

          {/* No Button - moves away */}
          <motion.div
            animate={{
              x: noButtonPosition.x,
              y: noButtonPosition.y,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover}
            className="relative w-full sm:w-auto"
          >
            <button
              className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 bg-white text-valentine-dark border-2 border-valentine-rose rounded-full font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl shadow-lg hover:shadow-xl transform transition-all duration-300 active:scale-95"
            >
              {noCount > 3 ? 'Please? 🥺' : 'No 🙈'}
            </button>
          </motion.div>
        </div>

        {noCount > 0 && noCount <= 3 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 sm:mt-6 text-valentine-dark text-base sm:text-lg md:text-xl px-2"
          >
            Are you sure? 😢
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default ProposalPage;
