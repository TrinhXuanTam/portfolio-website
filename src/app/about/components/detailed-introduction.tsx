import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Stack from '@mui/material/Stack';
import FullScreenContainer from '@/components/full-screen-container';
import FadeIn from '@/components/transitions/fade-in';
import { getExtras } from '@/app/about/api/extras';

export default async function DetailedIntroduction() {
  const extras = await getExtras();

  return (
    <Container maxWidth="xl">
      <FullScreenContainer className="snap-y">
        <Stack spacing={5}>
          <FadeIn direction="left">
            <Stack>
              <Typography
                fontFamily={oswald.style.fontFamily}
                variant="h5"
                color="primary"
                fontWeight="bold"
              >
                Extras
              </Typography>
              <Typography
                fontFamily={oswald.style.fontFamily}
                fontWeight="bold"
                variant="h2"
                color="secondary"
                textTransform="uppercase"
              >
                Get to know me better
              </Typography>
            </Stack>
          </FadeIn>

          <Stack direction="row" spacing={10}>
            {extras.map((story, index) => (
              <Stack key={index} flex={1}>
                <FadeIn direction="down" delay={index * 0.15}>
                  <Typography
                    fontFamily={oswald.style.fontFamily}
                    fontWeight="bold"
                    variant="h4"
                    textTransform="uppercase"
                    whiteSpace="pre-line"
                    mb={2}
                  >
                    {story.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    textAlign="justify"
                    fontWeight="lighter"
                    whiteSpace="pre-line"
                  >
                    {story.text}
                  </Typography>
                </FadeIn>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </FullScreenContainer>
    </Container>
  );
}
