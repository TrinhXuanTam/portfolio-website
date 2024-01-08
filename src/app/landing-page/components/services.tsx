import { SxProps } from '@mui/system';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Container from '@mui/material/Container';
import developerForHire from '@/assets/images/developer-for-hire.png';
import developer from '@/assets/images/developer.png';
import consultant from '@/assets/images/consultant.png';
import Avatar from '@mui/material/Avatar';
import FadeIn from '@/components/transitions/fade-in';

type Service = {
  image: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    image: developerForHire.src,
    title: 'Developer for Hire',
    description:
      'Lend a seasoned touch to your team with my expertise in coding and agile development. I integrate seamlessly to push your project forward.',
  },
  {
    image: developer.src,
    title: 'Custom Software Solutions',
    description:
      'Transforming your business challenges into innovative tech solutions with custom software tailored to your specific needs.',
  },
  {
    image: consultant.src,
    title: 'IT Consulting',
    description:
      'Offering personalized consulting to help you leverage the latest technologies and optimize your IT strategy for maximum impact.',
  },
];

export default function Services({ sx }: { sx?: SxProps }) {
  return (
    <Container maxWidth="lg">
      <Stack sx={sx} spacing={10}>
        <FadeIn direction="up">
          <Stack direction="row" spacing={2} justifyContent="center">
            <Typography
              fontFamily={oswald.style.fontFamily}
              variant="h3"
              fontWeight="bold"
              textTransform="uppercase"
            >
              How can I help you
            </Typography>
            <Typography
              fontFamily={oswald.style.fontFamily}
              variant="h3"
              fontWeight="bold"
              textTransform="uppercase"
              color="primary"
            >
              grow your business
            </Typography>
            <Typography
              fontFamily={oswald.style.fontFamily}
              variant="h3"
              fontWeight="bold"
              textTransform="uppercase"
            >
              ?
            </Typography>
          </Stack>
        </FadeIn>
        <Stack direction="row" justifyContent="around">
          {services.map((service, index) => (
            <FadeIn key={index} direction="down" delay={index * 0.2}>
              <Stack flex={1} alignItems="center">
                <Avatar sx={{ width: 200, height: 200 }} src={service.image} />
                <Typography
                  fontFamily={oswald.style.fontFamily}
                  variant="h5"
                  fontWeight="bold"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  {service.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ mt: 2 }}
                  textAlign="center"
                  fontWeight="Regular"
                >
                  {service.description}
                </Typography>
              </Stack>
            </FadeIn>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
