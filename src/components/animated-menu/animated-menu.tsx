'use client';

import { motion, useCycle } from 'framer-motion';
import useTheme from '@mui/material/styles/useTheme';
import MenuIcon from '@/components/animated-menu/menu-icon';
import Grid from '@mui/material/Grid';
import { getRouteObjects } from '@/utils/routes';
import AnimatedNavigationLink from '@/components/transitions/animated-navigation-link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import FadeIn from '@/components/transitions/fade-in';
import { SxProps } from '@mui/material';

export default function AnimatedMenu({ sx }: { sx?: SxProps }) {
  const iconPosition = { top: '1rem', right: '1rem' };
  const iconX = `calc(100vw - ${iconPosition.top})`;
  const iconY = iconPosition.right;

  const [isOpen, toggleOpen] = useCycle(false, true);
  const theme = useTheme();
  const variants = {
    open: {
      clipPath: `circle(300vh at ${iconX} ${iconY})`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: `circle(50px at ${iconX} ${iconY})`,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 40,
      },
    },
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      transition={{
        duration: 1,
      }}
      style={{
        position: 'fixed',
        zIndex: '9998',
      }}
    >
      <motion.div
        variants={{
          open: {
            opacity: 1,
          },
          closed: {
            opacity: 0,
            transition: {
              delay: 0.25,
            },
          },
        }}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: '9998',
          backgroundColor: theme.palette.secondary.main,
        }}
      />
      <MenuIcon
        sx={sx}
        style={{
          position: 'fixed',
          zIndex: '100000',
          backgroundColor: 'transparent',
          border: 'none',
          ...iconPosition,
        }}
        toggle={() => toggleOpen()}
      />

      <Grid
        container
        sx={{
          position: 'fixed',
          zIndex: '9999',
          width: '100vw',
          display: isOpen ? 'flex' : 'none',
        }}
      >
        {getRouteObjects().map((route, index) => (
          <Grid item key={index} xs={12}>
            <FadeIn direction="down" delay={index * 0.2}>
              <AnimatedNavigationLink key={index} href={route.path}>
                <Button
                  variant="text"
                  color="inherit"
                  sx={{ mx: 1 }}
                  onClick={() => toggleOpen()}
                >
                  <Typography
                    fontFamily={oswald.style.fontFamily}
                    fontWeight="bold"
                    fontSize={{
                      xs: '2.5rem',
                      md: '4.rem'
                    }}
                  >
                    {route.name}
                  </Typography>
                </Button>
              </AnimatedNavigationLink>
            </FadeIn>
          </Grid>
        ))}
      </Grid>
    </motion.nav>
  );
}
