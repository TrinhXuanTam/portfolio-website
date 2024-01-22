import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { SxProps } from '@mui/system';
import React from 'react';
import FadeIn from '@/components/transitions/fade-in';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

type Service = {
  title: string;
  activites: string[];
};

const services: Service[] = [
  {
    title: 'Analysis',
    activites: [
      'Domain Research',
      'Requirements Engineering',
      'Planning & Estimation',
      'Product Specification & Strategy',
    ],
  },
  {
    title: 'Design',
    activites: [
      'Architecture & Infrastructure Design',
      'Database Modelling',
      'Wireframing & Prototyping',
      'UI/UX Design',
    ],
  },
  {
    title: 'Development',
    activites: [
      'Full-Stack Development',
      'Agile Methodologies',
      'Collaboration & Leadership',
      'Technical Documentation',
    ],
  },
  {
    title: 'Deployment',
    activites: [
      'DevOps',
      'Continuous Integration',
      'Continuous Deployment',
      'Monitoring',
    ],
  },
  {
    title: 'Testing',
    activites: [
      'Unit Testing',
      'Integration Testing',
      'End-to-end Testing',
      'Usability Testing',
    ],
  },
  {
    title: 'Maintenance',
    activites: [
      'Bug Fixing',
      'Feature Enhancements',
      'Performance Optimizations',
      'Security Updates',
    ],
  },
];

export default function DevelopmentProcess({ sx }: { sx?: SxProps }) {
  return (
    <Container sx={sx} maxWidth="lg">
      <FadeIn direction="left">
        <Typography
          fontFamily={oswald.style.fontFamily}
          fontWeight="bold"
          lineHeight={1.2}
          color="primary"
          fontSize={{
            xs: '1.5rem',
            sm: '1.7rem',
            md: '2rem',
          }}
        >
          How I work
        </Typography>
      </FadeIn>
      <FadeIn direction="left">
        <Stack>
          <Typography
            fontFamily={oswald.style.fontFamily}
            fontWeight="bold"
            lineHeight={1.2}
            textTransform="uppercase"
            fontSize={{
              xs: '2.3rem',
              sm: '3rem',
              md: '3.2rem',
            }}
          >
            Better strategy, <br /> better experiences
          </Typography>
        </Stack>
      </FadeIn>

      <Grid container mt={1} spacing={5}>
        {services.map((service, index) => (
          <Grid item key={index} xs={6} md={4}>
            <FadeIn delay={index * 0.2} once={true}>
              <Box position="relative">
                <Typography
                  fontFamily={oswald.style.fontFamily}
                  fontWeight="bold"
                  textTransform="uppercase"
                  color="secondary.light"
                  sx={{
                    opacity: 0.2,
                  }}
                  fontSize={{
                    xs: '5rem',
                  }}
                >
                  0{index + 1}
                </Typography>
                <Typography
                  fontFamily={oswald.style.fontFamily}
                  variant="h4"
                  fontWeight="bold"
                  position="absolute"
                  sx={{
                    top: '50%',
                    left: {
                      xs: '1.7rem',
                      sm: '3.5rem',
                    },
                    transform: 'translateY(-50%)',
                  }}
                  fontSize={{
                    xs: '1.5rem',
                    sm: '2.3rem',
                  }}
                >
                  {service.title}
                </Typography>
              </Box>
              <List
                sx={{
                  pl: {
                    xs: 0,
                    sm: '3.5rem',
                  },
                  py: 0,
                }}
              >
                {service.activites.map((activity, index) => (
                  <ListItem key={index} sx={{ pl: 0 }}>
                    <Typography
                      fontWeight="lighter"
                      lineHeight={{
                        xs: 1.2,
                        sx: 1.3,
                        md: 1.5,
                      }}
                      fontSize={{
                        xs: '0.7rem',
                        sm: '1rem',
                        md: '1.1rem',
                      }}
                    >
                      {activity}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </FadeIn>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
