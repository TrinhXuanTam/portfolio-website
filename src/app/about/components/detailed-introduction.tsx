import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Stack from '@mui/material/Stack';
import FadeIn from '@/components/transitions/fade-in';
import { getExtras } from '@/app/about/api/extras';
import Grid from '@mui/material/Grid';

export default async function DetailedIntroduction() {
  const extras = await getExtras();

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 12, md: 20 } }}>
      <Stack spacing={{ xs: 6, md: 10 }}>
        <FadeIn direction="left">
          <Stack>
            <Typography
              fontFamily={oswald.style.fontFamily}
              color="primary"
              fontWeight="bold"
              fontSize={{ xs: '1.5rem', sm: '2rem', md: '2.5rem' }}
            >
              More about me
            </Typography>
            <Typography
              fontFamily={oswald.style.fontFamily}
              fontWeight="bold"
              color="secondary"
              textTransform="uppercase"
              lineHeight={1.2}
              fontSize={{ xs: '2rem', sm: '3rem', md: '3.5rem' }}
            >
              Get to know me better
            </Typography>
          </Stack>
        </FadeIn>

        {/* Alternating full-width rows: label column + generous text column. */}
        <Stack spacing={{ xs: 10, md: 16 }}>
          {extras.map((story, index) => (
            <FadeIn key={index} direction="up" delay={0.1}>
              <Grid
                container
                spacing={{ xs: 2, md: 6 }}
                direction={index % 2 === 0 ? 'row' : 'row-reverse'}
                alignItems="baseline"
              >
                <Grid item xs={12} md={4}>
                  <Stack direction="row" alignItems="baseline" spacing={2}>
                    <Typography
                      fontFamily={oswald.style.fontFamily}
                      color="primary"
                      fontWeight="bold"
                      fontSize={{ xs: '1.2rem', md: '1.6rem' }}
                    >
                      0{index + 1}
                    </Typography>
                    <Typography
                      fontFamily={oswald.style.fontFamily}
                      fontWeight="bold"
                      textTransform="uppercase"
                      whiteSpace="pre-line"
                      lineHeight={1.1}
                      fontSize={{ xs: '1.6rem', sm: '2rem', md: '2.4rem' }}
                    >
                      {story.title}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography
                    fontWeight="lighter"
                    whiteSpace="pre-line"
                    sx={{ opacity: 0.9, lineHeight: 1.8 }}
                    fontSize={{ xs: '0.95rem', sm: '1.1rem' }}
                  >
                    {story.text}
                  </Typography>
                </Grid>
              </Grid>
            </FadeIn>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
