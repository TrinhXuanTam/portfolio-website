import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import FadeIn from '@/components/transitions/fade-in';
import { getEducation } from '@/app/about/api/education';
import { shortFormat } from '@/utils/date';

export default async function Experience() {
  const education = await getEducation();
  return (
    <Stack my={15}>
      <FadeIn direction="left">
        <Container maxWidth="xl">
          <Typography
            fontFamily={oswald.style.fontFamily}
            fontWeight="bold"
            variant="h6"
          >
            Education
          </Typography>
          <Typography
            fontFamily={oswald.style.fontFamily}
            fontWeight="bold"
            variant="h2"
            textTransform="uppercase"
            color="secondary"
          >
            Where I studied
          </Typography>
        </Container>
      </FadeIn>

      {education.map((education, index) => (
        <FadeIn key={index} direction="down" delay={index * 0.15}>
          <Stack>
            <Divider
              variant="fullWidth"
              sx={{ bgcolor: 'background.paper', my: 5 }}
            />
            <Container maxWidth="xl">
              <Stack direction="row" alignItems="end">
                <Stack flex={1}>
                  <Typography
                    fontFamily={oswald.style.fontFamily}
                    fontWeight="bold"
                    variant="h4"
                    textTransform="uppercase"
                  >
                    {education.to ? shortFormat(education.to) : 'Present'}
                  </Typography>
                  <Typography
                    fontFamily={oswald.style.fontFamily}
                    fontWeight="bold"
                    variant="h4"
                    textTransform="uppercase"
                  >
                    {shortFormat(education.from)}
                  </Typography>
                </Stack>

                <Stack flex={2}>
                  <Typography fontWeight="lighter" variant="subtitle1">
                    {education.location}
                  </Typography>
                  <Typography
                    fontFamily={oswald.style.fontFamily}
                    fontWeight="bold"
                    variant="h5"
                    color="primary"
                  >
                    {education.institution}
                  </Typography>
                  <Typography
                    fontFamily={oswald.style.fontFamily}
                    fontWeight="bold"
                    variant="h4"
                    textTransform="uppercase"
                  >
                    {education.title}
                  </Typography>
                </Stack>
              </Stack>
            </Container>
          </Stack>
        </FadeIn>
      ))}
    </Stack>
  );
}
