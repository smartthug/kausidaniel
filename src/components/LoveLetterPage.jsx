import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

/**
 * Love Letter Page with typing effect animation
 */
const LoveLetterPage = ({ onNext }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [heartCount, setHeartCount] = useState(8);

  useEffect(() => {
    // Adjust heart count based on screen size
    const updateHeartCount = () => {
      setHeartCount(window.innerWidth < 640 ? 4 : 8);
    };
    updateHeartCount();
    window.addEventListener('resize', updateHeartCount);
    return () => window.removeEventListener('resize', updateHeartCount);
  }, []);
  
  const letterText = `My Mr.Daniel Ebinesar,
You're my  biggest blessing.

(You walked into my life and changed everything.)

With you,I feel secure and truly happy.wish I could see you, talk to you, and spend more time with you.

(I just want to sit next to you, hold your hand, and talk about everything and nothing without worrying about time. Even simple moments with you mean everything to me.)

Thank you for being mine.

Forever yours 🧿
HAPPY 7th VALENTINES DAY MY DEAR MAMA🌻❤️`;

  useEffect(() => {
    if (currentIndex < letterText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(letterText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50); // Typing speed
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, letterText]);

  // Function to render text with highlighted parentheses content
  const renderTextWithHighlights = (text) => {
    const parts = [];
    let lastIndex = 0;
    let inHighlight = false;
    let highlightStart = 0;
    const firstLineEnd = text.indexOf('\n');

    for (let i = 0; i < text.length; i++) {
      if (text[i] === '(' && !inHighlight) {
        // Add text before highlight (excluding the opening parenthesis)
        if (i > lastIndex) {
          const beforeText = text.slice(lastIndex, i);
          const startPos = lastIndex;
          parts.push({ text: beforeText, highlight: false, startPos });
        }
        highlightStart = i + 1;
        inHighlight = true;
      } else if (text[i] === ')' && inHighlight) {
        // Add highlighted text (content inside parentheses, excluding the closing parenthesis)
        if (highlightStart < i) {
          parts.push({ text: text.slice(highlightStart, i), highlight: true });
        }
        lastIndex = i + 1;
        inHighlight = false;
      }
    }
    
    // Add remaining text (including incomplete highlights)
    if (lastIndex < text.length) {
      if (inHighlight) {
        // If we're still in a highlight, show it as highlighted (incomplete)
        if (highlightStart < text.length) {
          parts.push({ text: text.slice(highlightStart), highlight: true });
        }
      } else {
        const remainingText = text.slice(lastIndex);
        parts.push({ text: remainingText, highlight: false, startPos: lastIndex });
      }
    }

    return parts.map((part, index) => {
      if (part.highlight && part.text.trim()) {
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="inline-block bg-red-100 px-2 py-1 rounded-lg font-semibold text-red-700 border-l-4 border-red-500 my-1"
            style={{
              textShadow: '0 1px 2px rgba(220, 38, 38, 0.2)',
            }}
          >
            {part.text}
          </motion.span>
        );
      }
      // Check if this is part of the first line (starts at position 0)
      const isFirstLine = part.startPos === 0;
      if (isFirstLine && part.text.trim()) {
        // Split by newline to handle first line separately
        const lines = part.text.split('\n');
        if (lines.length > 0 && lines[0].trim()) {
          return (
            <span key={index}>
              <span className="text-blue-600 font-semibold text-lg md:text-xl">
                {lines[0]}
              </span>
              {lines.length > 1 && (
                <span>
                  {'\n' + lines.slice(1).join('\n')}
                </span>
              )}
            </span>
          );
        }
      }
      return <span key={index}>{part.text}</span>;
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-valentine-light via-pink-50 to-valentine-pink relative overflow-hidden">
      {/* Floating decorative hearts - fewer on mobile */}
      {[...Array(heartCount)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 15, -15, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="absolute text-xl sm:text-2xl md:text-3xl lg:text-4xl pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {['💕', '💖', '💗', '💝'][Math.floor(Math.random() * 4)]}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full relative z-10"
      >
        {/* Decorative paper background with enhanced styling */}
        <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 transform hover:rotate-0 transition-transform duration-500" style={{ boxShadow: '0 20px 60px rgba(255, 105, 180, 0.3)' }}>
          {/* Decorative corner hearts - hidden on very small screens */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 text-xl sm:text-2xl md:text-3xl hidden sm:block"
          >
            💌
          </motion.div>
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 text-xl sm:text-2xl md:text-3xl hidden sm:block"
          >
            💌
          </motion.div>
          
          {/* Handwritten style paper texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-valentine-light/20 to-valentine-pink/10 rounded-3xl pointer-events-none"></div>
          
          {/* Multiple floating hearts */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(255, 105, 180, 0.5))',
            }}
          >
            ❤️
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: 0.5 }}
            className="absolute top-8 right-4 sm:top-12 sm:right-8 text-xl sm:text-2xl md:text-3xl"
          >
            💕
          </motion.div>

          {/* Letter content */}
          <div className="relative z-10">
            <div className="font-poppins text-valentine-dark text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-wrap font-medium">
              {renderTextWithHighlights(displayedText)}
            </div>
          </div>
        </div>

        {/* Navigation button */}
        {currentIndex >= letterText.length && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', damping: 10 }}
            className="mt-8 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 105, 180, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={onNext}
              className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-gradient-to-r from-valentine-rose via-valentine-red to-valentine-rose text-white rounded-full font-semibold text-sm sm:text-base md:text-lg lg:text-xl shadow-2xl transform transition-all duration-300 relative overflow-hidden w-full max-w-xs sm:max-w-none"
              style={{
                backgroundSize: '200% 200%',
                animation: 'gradient 3s ease infinite',
              }}
            >
              <span className="relative z-10">Continue to Memories 💕</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default LoveLetterPage;
