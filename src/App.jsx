import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage';
import LoveLetterPage from './components/LoveLetterPage';
import MemoryGallery from './components/MemoryGallery';
import ProposalPage from './components/ProposalPage';
import Modal from './components/Modal';
import './App.css';

/**
 * Main App Component
 * Manages navigation between different pages/sections
 */
function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [showCelebration, setShowCelebration] = useState(false);

  // Navigation handlers
  const handleNext = () => {
    const pages = ['landing', 'letter', 'gallery', 'proposal'];
    const currentIndex = pages.indexOf(currentPage);
    if (currentIndex < pages.length - 1) {
      setCurrentPage(pages[currentIndex + 1]);
    }
  };

  const handleYes = () => {
    setShowCelebration(true);
  };

  const handleCloseCelebration = () => {
    setShowCelebration(false);
    // Optionally reset to landing page or stay on proposal page
  };

  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {currentPage === 'landing' && (
          <motion.div
            key="landing"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <LandingPage onNext={handleNext} />
          </motion.div>
        )}

        {currentPage === 'letter' && (
          <motion.div
            key="letter"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <LoveLetterPage onNext={handleNext} />
          </motion.div>
        )}

        {currentPage === 'gallery' && (
          <motion.div
            key="gallery"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <MemoryGallery onNext={handleNext} />
          </motion.div>
        )}

        {currentPage === 'proposal' && (
          <motion.div
            key="proposal"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <ProposalPage onYes={handleYes} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Celebration Modal */}
      <Modal isOpen={showCelebration} onClose={handleCloseCelebration} />
    </div>
  );
}

export default App;
