import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import RoundedButton from '@/components/buttons/rounded-button';
import Container from '@mui/material/Container';
import Logo from '@/components/logo';

const pages = ['Home', 'About', 'Resume', 'Projects', 'Blogs'];

function ResponsiveAppBar() {
  return (
    <AppBar position="fixed" sx={{ backdropFilter: 'blur(40px)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex' }}>
          <Logo />
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'end',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {pages.map((page) => (
              <Button variant="text" color="inherit" key={page} sx={{ mx: 1 }}>
                {page}
              </Button>
            ))}
            <RoundedButton
              variant="contained"
              sx={{
                px: 3,
                ml: 2,
                display: 'block',
              }}
            >
              Contact
            </RoundedButton>
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
