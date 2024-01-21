import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Stack from '@mui/material/Stack';
import FullScreenContainer from '@/components/full-screen-container';
import FadeIn from '@/components/transitions/fade-in';
import { getExtras } from '@/app/about/api/extras';
import Grid from '@mui/material/Grid';

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
                color="primary"
                fontWeight="bold"
                fontSize={{
                  xs: '1.5rem',
                  sm: '2rem',
                  md: '2.5rem',
                }}
              >
                Extras
              </Typography>
              <Typography
                fontFamily={oswald.style.fontFamily}
                fontWeight="bold"
                color="secondary"
                textTransform="uppercase"
                lineHeight={1.2}
                fontSize={{
                  xs: '2rem',
                  sm: '3rem',
                  md: '3.5rem',
                }}
              >
                Get to know me better
              </Typography>
            </Stack>
          </FadeIn>

          <Grid container rowSpacing={5}>
            {extras.map((story, index) => (
              <Grid key={index} item xs={12} md={4} pr={{ md: 5 }}>
                <FadeIn direction="down" delay={index * 0.15}>
                  <Typography
                    fontFamily={oswald.style.fontFamily}
                    fontWeight="bold"
                    textTransform="uppercase"
                    whiteSpace="pre-line"
                    mb={2}
                    fontSize={{
                      xs: '1.5rem',
                      sm: '2rem',
                      md: '2.5rem',
                    }}
                  >
                    {story.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    textAlign="justify"
                    fontWeight="lighter"
                    whiteSpace="pre-line"
                    fontSize={{
                      xs: '0.8rem',
                      sm: '1rem',
                    }}
                  >
                    {story.text}
                  </Typography>
                </FadeIn>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </FullScreenContainer>
    </Container>
  );
}
