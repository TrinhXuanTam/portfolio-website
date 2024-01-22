import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import RoundedButton from '@/components/buttons/rounded-button';
import Container from '@mui/material/Container';
import { SxProps } from '@mui/material';
import FadeIn from '@/components/transitions/fade-in';
import FullScreenContainer from '@/components/full-screen-container';
import { getCvUrl } from '@/app/about/api/cv';
import AnimatedNavigationLink from '@/components/transitions/animated-navigation-link';
import Routes from '@/utils/routes';
import Box from '@mui/material/Box';

export default async function CallToAction({ sx }: { sx?: SxProps }) {
  const cvUrl = await getCvUrl();

  return (
    <FullScreenContainer>
      <Container sx={sx} maxWidth="xl">
        <FadeIn>
          <Stack alignItems="center" spacing={7}>
            <Stack justifyContent="center" alignItems="center">
              <Typography
                fontFamily={oswald.style.fontFamily}
                fontWeight="bold"
                textTransform="uppercase"
                fontSize={{
                  xs: '1.7rem',
                  sm: '2.8rem',
                  md: '4rem',
                  lg: '5.5rem',
                }}
              >
                Want a quick chat?
              </Typography>
              <Typography
                fontFamily={oswald.style.fontFamily}
                fontWeight="bold"
                textTransform="uppercase"
                color="primary"
                fontSize={{
                  xs: '1.7rem',
                  sm: '2.8rem',
                  md: '4rem',
                  lg: '5.5rem',
                }}
              >
                Let&apos;s grab a coffee
              </Typography>
            </Stack>

            <Typography
              fontWeight="lighter"
              fontSize={{
                xs: '1rem',
                sm: '1.25rem',
                md: '1.5rem',
              }}
            >
              If you have any questions or just want to say hi, feel free to
              send me a message.
            </Typography>

            <Stack direction="row" spacing={3}>
              <AnimatedNavigationLink href={Routes.Contact}>
                <RoundedButton
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  Send me a message
                </RoundedButton>
              </AnimatedNavigationLink>

              <RoundedButton
                component="a"
                variant="outlined"
                color="primary"
                size="large"
                href={cvUrl}
              >
                View full CV
              </RoundedButton>

              <Box
                display={{
                  xs: 'none',
                  sm: 'block',
                }}
              >
                <AnimatedNavigationLink href={Routes.Projects}>
                  <RoundedButton
                    variant="outlined"
                    color="primary"
                    size="large"
                  >
                    See my projects
                  </RoundedButton>
                </AnimatedNavigationLink>
              </Box>
            </Stack>
          </Stack>
        </FadeIn>
      </Container>
    </FullScreenContainer>
  );
}
