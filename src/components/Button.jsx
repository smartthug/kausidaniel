import { motion } from 'framer-motion';

/**
 * Reusable Button Component
 * @param {Object} props - Component props
 * @param {string} props.children - Button text/content
 * @param {Function} props.onClick - Click handler
 * @param {string} props.variant - Button style variant ('primary' | 'secondary' | 'danger')
 * @param {boolean} props.disabled - Disabled state
 */
const Button = ({ children, onClick, variant = 'primary', disabled = false, className = '' }) => {
  const baseStyles = 'px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-valentine-rose to-valentine-red text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-valentine-rose border-2 border-valentine-rose shadow-md hover:bg-valentine-light',
    danger: 'bg-gradient-to-r from-red-400 to-red-600 text-white shadow-lg hover:shadow-xl'
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
