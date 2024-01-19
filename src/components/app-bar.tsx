import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import RoundedButton from '@/components/buttons/rounded-button';
import Container from '@mui/material/Container';
import Logo from '@/components/logo';
import AnimatedNavigationLink from '@/components/transitions/animated-navigation-link';
import Routes, { getRouteObjects } from '@/utils/routes';

function ResponsiveAppBar() {
  return (
    <AppBar position="fixed" sx={{ backdropFilter: 'blur(40px)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex' }}>
          <AnimatedNavigationLink href={Routes.Home}>
            <Logo />
          </AnimatedNavigationLink>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'end',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {getRouteObjects()
              .filter((route) => route.path !== Routes.Contact)
              .map((route) => (
                <AnimatedNavigationLink key={route.name} href={route.path}>
                  <Button variant="text" color="inherit" sx={{ mx: 1 }}>
                    {route.name}
                  </Button>
                </AnimatedNavigationLink>
              ))}
            <AnimatedNavigationLink href={Routes.Contact}>
              <RoundedButton
                variant="contained"
                sx={{
                  px: 3,
                  ml: 2,
                  display: 'block',
                }}
                color="secondary"
              >
                Contact
              </RoundedButton>
            </AnimatedNavigationLink>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'end',
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton size="large" color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
