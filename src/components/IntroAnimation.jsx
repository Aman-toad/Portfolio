import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const IntroAnimation = ({ onComplete }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 200); // faster show
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.5 }} // fade out sooner
    >
      <div className="text-center">
        {showText && (
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              bounce: 0.2
            }}
            onAnimationComplete={() => {
              setTimeout(onComplete, 300);
            }}
          >
            <motion.h1
              className="hero-title gradient-text"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              AMAN SINGH
            </motion.h1>
            <motion.p
              className="text-2xl text-muted-foreground mt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Fullstack Developer
            </motion.p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default IntroAnimation;
