import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import RoundedButton from '@/components/buttons/rounded-button';
import Logo from '@/components/logo';

const pages = ['Home', 'About', 'Resume', 'Services', 'Projects', 'Blogs'];

function ResponsiveAppBar() {
  return (
    <AppBar position="static">
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
              <Button variant="text" key={page} sx={{ mx: 1, color: 'white' }}>
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
              Get in touch
            </RoundedButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
