import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroAnimation from '@/components/IntroAnimation';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroAnimation key="intro" onComplete={handleIntroComplete} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navigation />
            <main className="relative">
              <Hero />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;