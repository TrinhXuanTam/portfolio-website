import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Container from '@mui/material/Container';
import Logo from '@/components/logo';
import IconButton from '@mui/material/IconButton';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { getContact, getProfiles } from '@/app/about/api/contact';
import { getRouteObjects } from '@/utils/routes';
import AnimatedNavigationLink from '@/components/transitions/animated-navigation-link';
import Grid from '@mui/material/Grid';

export default async function PageFooter() {
  const now = new Date();
  const profiles = await getProfiles();
  const contact = await getContact();
  const routes = getRouteObjects();

  return (
    <Box sx={{ backgroundColor: 'background.paper', width: '100vw' }}>
      <Container maxWidth="lg" sx={{ padding: 3 }}>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={4} md={6}>
            <Logo />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Stack spacing={2}>
              <Typography
                fontFamily={oswald.style.fontFamily}
                variant="h5"
                fontWeight="bold"
              >
                Menu
              </Typography>

              {routes.map((route, index) => (
                <AnimatedNavigationLink href={route.path} key={index}>
                  <Typography variant="body2" sx={{ cursor: 'pointer' }}>
                    {route.name}
                  </Typography>
                </AnimatedNavigationLink>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Stack spacing={3}>
              <Typography
                fontFamily={oswald.style.fontFamily}
                variant="h5"
                fontWeight="bold"
              >
                Contact
              </Typography>

              <Stack direction="row" alignItems="center" spacing={2}>
                <EmailIcon fontSize="small" />
                <Typography variant="body2">{contact.email}</Typography>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={2}>
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">{contact.phone}</Typography>
              </Stack>

              <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                <IconButton
                  size="large"
                  href={profiles.linkedinUrl}
                  sx={{
                    color: 'text.primary',
                    padding: 0,
                  }}
                >
                  <LinkedInIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                  size="large"
                  href={profiles.githubUrl}
                  sx={{
                    color: 'text.primary',
                    padding: 0,
                  }}
                >
                  <GitHubIcon fontSize="inherit" />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Stack mt={15}>
          <Typography variant="subtitle1">
            © {now.getFullYear()} All rights reserved. Designed & Implemented by
            Trinh Xuan Tam
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
