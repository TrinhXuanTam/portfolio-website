import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import RoundedButton from '@/components/buttons/rounded-button';
import FadeIn from '@/components/transitions/fade-in';

type Experience = {
  title: string;
  company: string;
  location: string;
  from: string;
  to: string;
};

const experiences: Experience[] = [
  {
    company: 'Iterates',
    title: 'AI Full-Stack Developer',
    location: 'Brussels, Belgium',
    from: 'Oct 2023',
    to: 'Present',
  },
  {
    company: 'DevCity',
    title: 'JavaScript Full-Stack Developer',
    location: 'Prague, Czech Republic',
    from: 'Jul 2022',
    to: 'Jan 2024',
  },
  {
    company: 'Unicorn',
    title: 'JavaScript Backend Developer',
    location: 'Prague, Czech Republic',
    from: 'Apr 2022',
    to: 'Apr 2023',
  },
  {
    company: 'Betrian',
    title: 'Lead Flutter mobile app developer',
    location: 'Brno, Czech Republic',
    from: 'Jul 2021',
    to: 'Mar 2023',
  },
  {
    company: 'Aviette',
    title: 'Lead Python Full-Stack Developer',
    location: 'Prague, Czech Republic',
    from: 'Apr 2020',
    to: 'Aug 2022',
  },
];

export default function Experience() {
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
            variant="outlined"
            color="secondary"
            size="large"
            sx={{ mt: 4 }}
          >
            View Full CV
          </RoundedButton>
        </Container>
      </FadeIn>

      {experiences.map((experience, index) => (
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
                    {experience.to}
                  </Typography>
                  <Typography
                    fontFamily={oswald.style.fontFamily}
                    fontWeight="bold"
                    variant="h4"
                    textTransform="uppercase"
                  >
                    {experience.from}
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
