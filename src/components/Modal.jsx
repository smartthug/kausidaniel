import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

/**
 * Celebration Modal Component
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Modal open state
 * @param {Function} props.onClose - Close handler
 */
const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: 'spring', damping: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 max-w-md w-full mx-2 sm:mx-4 relative overflow-hidden shadow-2xl"
            >
              {/* Confetti/Hearts */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    y: -100, 
                    x: Math.random() * 400 - 200,
                    rotate: 0,
                    opacity: 1
                  }}
                  animate={{ 
                    y: 600,
                    rotate: 360,
                    opacity: 0
                  }}
                  transition={{ 
                    duration: 2 + Math.random(),
                    delay: Math.random() * 0.5,
                    repeat: Infinity
                  }}
                  className="absolute text-3xl"
                  style={{ left: `${Math.random() * 100}%` }}
                >
                  {['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)]}
                </motion.div>
              ))}
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="text-5xl sm:text-6xl md:text-7xl mb-3 sm:mb-4"
                >
                  🎉
                </motion.div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-pacifico text-valentine-rose mb-3 sm:mb-4 text-shadow px-2">
                  Yay! I love you ❤️
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl font-pacifico text-valentine-dark mb-4 sm:mb-6 px-2">
                  Forever & Always
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="px-5 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-valentine-rose to-valentine-red text-white rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-shadow w-full max-w-xs sm:max-w-none"
                >
                  Close 💕
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
