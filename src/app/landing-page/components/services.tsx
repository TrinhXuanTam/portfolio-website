import { SxProps } from '@mui/system';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import FadeIn from '@/components/transitions/fade-in';
import Grid from '@mui/material/Grid';
import Tilt from '@/components/interactive/tilt';
import GradientText from '@/components/transitions/gradient-text';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  // Per-service accent so the row reads as multi-color, not mono.
  color: string;
  glow: string;
};

const services: Service[] = [
  {
    icon: <CodeOutlinedIcon sx={{ fontSize: 'inherit' }} />,
    title: 'Developer for Hire',
    description:
      'Lend a seasoned touch to your team with my expertise in coding and agile development. I integrate seamlessly to push your project forward.',
    color: '#16b573', // emerald
    glow: 'rgba(22,181,115,0.25)',
  },
  {
    icon: <RocketLaunchOutlinedIcon sx={{ fontSize: 'inherit' }} />,
    title: 'Custom Software Solutions',
    description:
      'Transforming your business challenges into innovative tech solutions with custom software tailored to your specific needs.',
    color: '#f3632d', // orange
    glow: 'rgba(243,99,45,0.25)',
  },
  {
    icon: <LightbulbOutlinedIcon sx={{ fontSize: 'inherit' }} />,
    title: 'IT Consulting',
    description:
      'Offering personalized consulting to help you leverage the latest technologies and optimize your IT strategy for maximum impact.',
    color: '#3b82f6', // blue
    glow: 'rgba(59,130,246,0.25)',
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
                fontSize={{
                  xs: '2rem',
                  sm: '1.8rem',
                  md: '2.2rem',
                  lg: '3.6rem',
                }}
              >
                <GradientText>grow your business</GradientText>
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
                <Tilt max={8}>
                <Stack flex={1} alignItems="center">
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: { xs: '4rem', sm: '5rem', lg: '6rem' },
                      color: service.color,
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    fontFamily={oswald.style.fontFamily}
                    variant="h5"
                    fontWeight="bold"
                    sx={{ mt: 2, color: service.color }}
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
                </Tilt>
              </FadeIn>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}
