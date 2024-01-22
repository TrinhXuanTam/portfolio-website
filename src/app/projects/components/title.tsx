import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Stack from '@mui/material/Stack';
import FadeIn from '@/components/transitions/fade-in';

export default function ProjectsTitle() {
  return (
    <Container maxWidth="xl" sx={{ mt: '50vh', transform: 'translateY(-50%)' }}>
      <Stack>
        <FadeIn>
          <Typography
            fontFamily={oswald.style.fontFamily}
            fontWeight="bold"
            textTransform="uppercase"
            fontSize={{
              xs: '2rem',
              sm: '3.5rem',
              md: '4.5rem',
              lg: '5.5rem',
            }}
          >
            Discover <br /> some of my projects <br />
          </Typography>
        </FadeIn>
        <Stack direction="row" spacing={2} alignItems="center">
          <FadeIn>
            <Typography
              fontFamily={oswald.style.fontFamily}
              fontWeight="bold"
              textTransform="uppercase"
              fontSize={{
                xs: '2rem',
                sm: '3.5rem',
                md: '4.5rem',
                lg: '5.5rem',
              }}
            >
              I&apos;ve worked on
            </Typography>
          </FadeIn>

          <FadeIn delay={0.5}>
            <Typography
              fontFamily={oswald.style.fontFamily}
              textTransform="uppercase"
              color="secondary"
              fontSize={{
                xs: '0.5rem',
                md: '1.15rem',
              }}
            >
              See what I&apos;ve been up to <br />
              My latest projects <br />
              What I usually do
            </Typography>
          </FadeIn>
        </Stack>
      </Stack>
    </Container>
  );
}
