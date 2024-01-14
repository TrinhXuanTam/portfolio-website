import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import RoundedButton from '@/components/buttons/rounded-button';
import FadeIn from '@/components/transitions/fade-in';
import { getCvUrl } from '@/app/about/api/cv';
import { getWorkExperience } from '@/app/about/api/experience';
import { shortFormat } from '@/utils/date';

export default async function Experience() {
  const cvUrl = await getCvUrl();
  const workExperience = await getWorkExperience();

  return (
    <Stack my={15}>
      <FadeIn direction="left">
        <Container maxWidth="xl">
          <Typography
            fontFamily={oswald.style.fontFamily}
            fontWeight="bold"
            variant="h6"
          >
            Work Experience
          </Typography>
          <Typography
            fontFamily={oswald.style.fontFamily}
            fontWeight="bold"
            variant="h2"
            textTransform="uppercase"
            color="primary"
          >
            I colaborated <br />
            with these companies
          </Typography>
          <RoundedButton
            component="a"
            variant="outlined"
            color="secondary"
            size="large"
            href={cvUrl}
            sx={{ mt: 4 }}
          >
            View Full CV
          </RoundedButton>
        </Container>
      </FadeIn>

      {workExperience.map((experience, index) => (
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
                    {experience.to ? shortFormat(experience.to) : 'Present'}
                  </Typography>
                  <Typography
                    fontFamily={oswald.style.fontFamily}
                    fontWeight="bold"
                    variant="h4"
                    textTransform="uppercase"
                  >
                    {shortFormat(experience.from)}
                  </Typography>
                </Stack>

                <Stack flex={2}>
                  <Typography fontWeight="lighter" variant="subtitle1">
                    {experience.location}
                  </Typography>
                  <Typography
                    fontFamily={oswald.style.fontFamily}
                    fontWeight="bold"
                    variant="h5"
                    color="secondary"
                  >
                    {experience.company}
                  </Typography>
                  <Typography
                    fontFamily={oswald.style.fontFamily}
                    fontWeight="bold"
                    variant="h4"
                    textTransform="uppercase"
                  >
                    {experience.title}
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
