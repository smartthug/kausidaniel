import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

/**
 * Landing Page Component with floating hearts animation
 */
const LandingPage = ({ onNext }) => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Create floating hearts - fewer on mobile for better performance
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💝', '💞', '💓'];
    const heartCount = window.innerWidth < 640 ? 8 : 15; // Fewer hearts on mobile
    const newHearts = Array.from({ length: heartCount }, (_, i) => ({
      id: i,
      emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 2,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Floating Hearts Background */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: '-100vh',
            opacity: [0, 1, 1, 0],
            x: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          style={{ left: `${heart.x}%` }}
        >
          {heart.emoji}
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 10, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-pacifico text-valentine-rose mb-4 sm:mb-6 text-shadow px-2"
        >
          Happy Valentine's Day ❤️
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-valentine-dark mb-8 sm:mb-10 md:mb-12 font-medium px-2"
        >
          To the most special person in my life
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, type: 'spring' }}
        >
          <button
            onClick={onNext}
            className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-gradient-to-r from-valentine-rose to-valentine-red text-white rounded-full font-semibold text-base sm:text-lg md:text-xl lg:text-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 active:scale-95 transition-all duration-300 glow w-full max-w-xs sm:max-w-none"
          >
            Open My Heart 💌
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
