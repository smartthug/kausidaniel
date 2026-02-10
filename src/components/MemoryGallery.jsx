import { motion } from 'framer-motion';
import Card from './Card';

/**
 * Memory Gallery Page with photo cards
 */
const MemoryGallery = ({ onNext }) => {
  // Get base URL for deployment (handles subdirectory deployments)
  const baseUrl = import.meta.env.BASE_URL;
  
  // Images from public folder with romantic captions
  const memories = [
    { 
      image: `${baseUrl}pic-1.jpeg`, 
      caption: 'Journey started at 2019  still together 💕' 
    },
    { 
      image: `${baseUrl}pic-2.jpeg`, 
      caption: 'Favorite picture of mine 🧿' 
    },
    { 
      image: `${baseUrl}pic-3.jpeg`, 
      caption: 'Our perfect moments together ✨' 
    },
    { 
      image: `${baseUrl}pic-4.jpeg`, 
      caption: 'Adventures with my favorite person 🗻' 
    },
    { 
      image: `${baseUrl}pic-5.jpeg`, 
      caption: 'Your smile lights up my world 😊' 
    },
    { 
      image: `${baseUrl}pic-6.jpeg`, 
      caption: 'Forever grateful for you 💖' 
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-valentine-light via-pink-50 to-valentine-pink">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-pacifico text-valentine-rose text-center mb-6 sm:mb-8 md:mb-12 text-shadow px-2">
          Our Beautiful Memories 💕
        </h2>

        {/* Grid of memory cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {memories.map((memory, index) => (
            <Card
              key={index}
              image={memory.image}
              caption={memory.caption}
              index={index}
            />
          ))}
        </div>

        {/* Navigation button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <button
            onClick={onNext}
            className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-valentine-rose to-valentine-red text-white rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 w-full max-w-xs sm:max-w-none"
          >
            Continue 💖
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MemoryGallery;
