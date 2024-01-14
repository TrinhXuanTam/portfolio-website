import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import FullScreenContainer from '@/components/full-screen-container';
import Stack from '@mui/material/Stack';
import FadeIn from '@/components/transitions/fade-in';
import { getProjectsOverview } from '@/app/projects/api/projects';

export default async function ProjectsOverview() {
  const projects = await getProjectsOverview();

  return (
    <Container maxWidth="xl">
      <FullScreenContainer className="snap-y">
        <Stack>
          <FadeIn>
            <Typography
              fontFamily={oswald.style.fontFamily}
              fontWeight="bold"
              variant="h1"
              textTransform="uppercase"
            >
              Discover <br /> some of my projects <br />
            </Typography>
          </FadeIn>
          <Stack direction="row" spacing={2} alignItems="center">
            <FadeIn>
              <Typography
                fontFamily={oswald.style.fontFamily}
                fontWeight="bold"
                variant="h1"
                textTransform="uppercase"
              >
                I&apos;ve worked on
              </Typography>
            </FadeIn>

            <FadeIn delay={0.5}>
              <Typography
                fontFamily={oswald.style.fontFamily}
                variant="body1"
                textTransform="uppercase"
                color="secondary"
              >
                Let&apos;s see what I&apos;ve been up to <br />
                My latest projects <br />
                What I usually do
              </Typography>
            </FadeIn>
          </Stack>
        </Stack>
      </FullScreenContainer>
    </Container>
  );
}
