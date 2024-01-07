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

const pages = ['Home', 'About', 'Resume', 'Projects', 'Blogs', 'Contact'];

export default function PageFooter() {
  const now = new Date();

  return (
    <Box sx={{ backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Stack padding={3} alignItems="center">
          <Stack width="100%" direction="row" justifyContent="space-between">
            <Logo />
            <Stack direction="row" spacing={20}>
              <Stack spacing={2}>
                <Typography
                  fontFamily={oswald.style.fontFamily}
                  variant="h5"
                  fontWeight="bold"
                >
                  Menu
                </Typography>

                {pages.map((page, index) => (
                  <Typography
                    variant="body2"
                    key={index}
                    sx={{ cursor: 'pointer' }}
                  >
                    {page}
                  </Typography>
                ))}
              </Stack>

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
                  <Typography variant="body2">{process.env.EMAIL}</Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={2}>
                  <PhoneIcon fontSize="small" />
                  <Typography variant="body2">{process.env.PHONE}</Typography>
                </Stack>

                <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                  <IconButton
                    size="large"
                    href={process.env.LINKEDIN_URL!}
                    sx={{
                      color: 'text.primary',
                      padding: 0,
                    }}
                  >
                    <LinkedInIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton
                    size="large"
                    href={process.env.GITHUB_URL!}
                    sx={{
                      color: 'text.primary',
                      padding: 0,
                    }}
                  >
                    <GitHubIcon fontSize="inherit" />
                  </IconButton>
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          <Stack direction="row" sx={{ mt: 15 }}>
            <Typography variant="subtitle1">
              © {now.getFullYear()} All rights reserved. Designed & Implemented
              by Trinh Xuan Tam
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
