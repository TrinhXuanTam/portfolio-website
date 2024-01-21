'use client';

import React from 'react';

import { useRouter } from 'next/navigation';
import { motion, Spring, AnimatePresence } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import Logo from '@/components/logo';

export const AnimatedNavigationContext = React.createContext({
  navigate: (href: string) => {
    console.log('navigate', href);
  },
});

export const useAnimatedNavigation = () =>
  React.useContext(AnimatedNavigationContext);

export default function AnimatedNavigation({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const router = useRouter();
  const [isAnimating, setIsAnimating] = React.useState(false);
  const navigate = (href: string) => {
    setIsAnimating(true);
    router.push(href);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  const transitionSpringPhysics: Spring = {
    type: 'spring',
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };

  const animationVariants = {
    hidden: { clipPath: 'circle(0vw)' }, // Start from above the screen
    visible: { clipPath: 'circle(100vw)', transition: { duration: 0.7 } }, // Slide down to cover the screen
    exit: { opacity: 0, backgroundColor: theme.palette.background.default }, // Slide down out of the screen
  };

  return (
    <AnimatedNavigationContext.Provider value={{ navigate }}>
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial="hidden"
            variants={animationVariants}
            animate="visible"
            exit="exit"
            transition={transitionSpringPhysics}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 10000,
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <Logo
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              transition={{
                duration: 0.5,
                repeatDelay: 0,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {!isAnimating && children}
    </AnimatedNavigationContext.Provider>
  );
}
