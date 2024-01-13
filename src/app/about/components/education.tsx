import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

type Education = {
  title: string;
  institution: string;
  location: string;
  from: string;
  to: string;
};

const education: Education[] = [
  {
    institution: 'CTU in Prague, Faculty of Information Technology',
    title: "Master's Degree in Software Engineering",
    location: 'Prague, Czech Republic',
    from: 'Sep 2021',
    to: 'Jun 2023',
  },
  {
    institution: 'KU Leuven, Faculty of Engineering Science',
    title: 'Erasmus Exchange in Soft Robotics',
    location: 'Leuven, Belgium',
    from: 'Feb 2023',
    to: 'Mar 2023',
  },
  {
    institution: 'CTU in Prague, Faculty of Information Technology',
    title: "Bachelor's Degree in Software Engineering",
    location: 'Prague, Czech Republic',
    from: 'Sep 2018',
    to: 'Jul 2021',
  },
];

export default function Experience() {
  return (
    <Stack my={15}>
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

      {education.map((education, index) => (
        <Stack key={index}>
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
                  {education.to}
                </Typography>
                <Typography
                  fontFamily={oswald.style.fontFamily}
                  fontWeight="bold"
                  variant="h4"
                  textTransform="uppercase"
                >
                  {education.from}
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
      ))}
    </Stack>
  );
}
