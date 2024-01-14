import FullScreenContainer from '@/components/full-screen-container';
import Container from '@mui/material/Container';
import VerticalScrollTransition from '@/components/transitions/vertical-scroll-transition';
import FadeIn from '@/components/transitions/fade-in';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Stack from '@mui/material/Stack';
import mountains from '@/assets/images/mountains.png';
import ParalaxImage from '@/app/about/components/paralax-image';

export default function Greeting() {
  return (
    <FullScreenContainer className="snap-y">
      <Container maxWidth="xl">
        <VerticalScrollTransition>
          <FadeIn direction="up" once={true}>
            <Typography
              fontFamily={oswald.style.fontFamily}
              fontWeight="bold"
              variant="h2"
              color="secondary"
              textTransform="uppercase"
            >
              Hello world
            </Typography>
          </FadeIn>
        </VerticalScrollTransition>

        <FadeIn delay={0.6} once={true}>
          <ParalaxImage
            sx={{
              my: 3,
              borderEndStartRadius: '10rem',
              borderStartEndRadius: '10rem',
            }}
            src={mountains.src}
            alt="Me in the mountains"
          />
        </FadeIn>

        <VerticalScrollTransition direction="down">
          <FadeIn direction="down" delay={0.4} once={true}>
            <Stack direction="row" justifyContent="end" spacing={2}>
              <Typography
                fontFamily={oswald.style.fontFamily}
                fontWeight="bold"
                variant="h2"
                textTransform="uppercase"
              >
                just call me
              </Typography>
              <Typography
                fontFamily={oswald.style.fontFamily}
                fontWeight="bold"
                variant="h2"
                color="primary"
                textTransform="uppercase"
              >
                David
              </Typography>
            </Stack>
          </FadeIn>
        </VerticalScrollTransition>
      </Container>
    </FullScreenContainer>
  );
}
