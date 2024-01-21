import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import RoundedButton from '@/components/buttons/rounded-button';
import Container from '@mui/material/Container';
import { SxProps } from '@mui/material';
import FadeIn from '@/components/transitions/fade-in';
import FullScreenContainer from '@/components/full-screen-container';
import AnimatedNavigationLink from '@/components/transitions/animated-navigation-link';
import Routes from '@/utils/routes';

export default async function CallToAction({ sx }: { sx?: SxProps }) {
  return (
    <FullScreenContainer className="snap-y">
      <Container sx={sx} maxWidth="xl">
        <FadeIn>
          <Stack
            alignItems="center"
            spacing={{
              xs: 5,
              sm: 7,
            }}
          >
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
                Did anything catch your eye?
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
                Let&apos;s have a discussion
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
              If you have something in mind or just want to say hi, feel free to
              send me a message.
            </Typography>

            <Stack direction="row" spacing={3}>
              <AnimatedNavigationLink href={Routes.Contact}>
                <RoundedButton
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  Contact me
                </RoundedButton>
              </AnimatedNavigationLink>

              <AnimatedNavigationLink href={Routes.About}>
                <RoundedButton variant="outlined" color="primary" size="large">
                  Learn more about me
                </RoundedButton>
              </AnimatedNavigationLink>
            </Stack>
          </Stack>
        </FadeIn>
      </Container>
    </FullScreenContainer>
  );
}
