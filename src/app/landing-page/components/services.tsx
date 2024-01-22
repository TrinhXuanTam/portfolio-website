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
import Grid from '@mui/material/Grid';

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
    <Container maxWidth="xl">
      <Stack sx={sx} spacing={10}>
        <FadeIn direction="up">
          <Stack
            direction={{
              xs: 'column',
              sm: 'row',
            }}
            spacing={{
              sm: 2,
            }}
            justifyContent="center"
          >
            <Typography
              fontFamily={oswald.style.fontFamily}
              fontWeight="bold"
              textTransform="uppercase"
              fontSize={{
                xs: '2rem',
                sm: '1.8rem',
                md: '2.2rem',
                lg: '3.6rem',
              }}
            >
              How can I help you
            </Typography>
            <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
              <Typography
                fontFamily={oswald.style.fontFamily}
                fontWeight="bold"
                textTransform="uppercase"
                color="primary"
                fontSize={{
                  xs: '2rem',
                  sm: '1.8rem',
                  md: '2.2rem',
                  lg: '3.6rem',
                }}
              >
                grow your business
              </Typography>
              <Typography
                fontFamily={oswald.style.fontFamily}
                fontWeight="bold"
                textTransform="uppercase"
                fontSize={{
                  xs: '2rem',
                  sm: '1.8rem',
                  md: '2.2rem',
                  lg: '3.6rem',
                }}
              >
                ?
              </Typography>
            </Stack>
          </Stack>
        </FadeIn>
        <Grid container>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index} mb={{ xs: '15vh', md: 0 }}>
              <FadeIn direction="down">
                <Stack flex={1} alignItems="center">
                  <Avatar
                    sx={{
                      height: {
                        xs: '10rem',
                        sm: '12rem',
                        lg: '15rem',
                      },
                      width: {
                        xs: '10rem',
                        sm: '12rem',
                        lg: '15rem',
                      },
                    }}
                    src={service.image}
                  />
                  <Typography
                    fontFamily={oswald.style.fontFamily}
                    variant="h5"
                    fontWeight="bold"
                    color="secondary"
                    sx={{ mt: 2 }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ mt: 2 }}
                    textAlign="center"
                    fontWeight="lighter"
                    px={5}
                    fontSize={{
                      xs: '0.9rem',
                      sm: '1rem',
                      md: '1.1rem',
                    }}
                  >
                    {service.description}
                  </Typography>
                </Stack>
              </FadeIn>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}
