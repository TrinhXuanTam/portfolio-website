import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Stack from '@mui/material/Stack';
import FadeIn from '@/components/transitions/fade-in';
import mountains from '@/assets/images/mountains.png';
import FullScreenContainer from '@/components/full-screen-container';
import ParalaxImage from '@/app/about/components/paralax-image';
import VerticalScrollTransition from '@/components/transitions/vertical-scroll-transition';

export default function About() {
  return (
    <Stack sx={{ pt: 10 }}>
      <FullScreenContainer>
        <Container maxWidth="lg">
          <VerticalScrollTransition>
            <Stack justifyContent="center" mb={3}>
              <FadeIn direction="down" once={true}>
                <Typography
                  fontFamily={oswald.style.fontFamily}
                  fontWeight="medium"
                  variant="h4"
                  color="primary"
                >
                  Hi there, nice to meet you !
                </Typography>
              </FadeIn>

              <FadeIn direction="down" delay={0.2} once={true}>
                <Typography
                  fontFamily={oswald.style.fontFamily}
                  fontWeight="bold"
                  variant="h3"
                >
                  I&apos;m known among friends and colleagues as David
                </Typography>
              </FadeIn>
            </Stack>
          </VerticalScrollTransition>

          <FadeIn direction="down" delay={0.4} once={true}>
            <ParalaxImage src={mountains.src} alt="Me in the mountains" />
          </FadeIn>
        </Container>
      </FullScreenContainer>
    </Stack>
  );
}
