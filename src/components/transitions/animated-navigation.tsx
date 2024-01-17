'use client';

import React, { useEffect } from 'react';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { motion, Spring, AnimatePresence } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

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
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [isAnimating, setIsAnimating] = React.useState(false);
  const navigate = (href: string) => {
    setIsAnimating(true);
    router.push(href);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(false);
    }, 200);
  }, [pathName, searchParams]);

  const transitionSpringPhysics: Spring = {
    type: 'spring',
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };

  const animationVariants = {
    hidden: { y: '-100%' }, // Start from above the screen
    visible: { y: 0 }, // Slide down to cover the screen
    exit: { y: '100%' }, // Slide down out of the screen
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
              backgroundColor: theme.palette.primary.main,
            }}
          />
        )}
      </AnimatePresence>
      {children}
    </AnimatedNavigationContext.Provider>
  );
}
