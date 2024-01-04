import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Container from '@mui/material/Container';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import HandymanIcon from '@mui/icons-material/Handyman';
import FlareIcon from '@mui/icons-material/Flare';
import RoundedButton from '@/components/buttons/rounded-button';
import Grid from '@mui/material/Grid';
import { SxProps } from '@mui/system';
import React from 'react';

type DevelopmentProcessPhase = {
  title: React.ReactNode;
  description: React.ReactNode;
};

const phases: DevelopmentProcessPhase[] = [
  {
    title: (
      <>
        <TravelExploreIcon fontSize="large" /> Analyze
      </>
    ),
    description: (
      <>
        Ensuring every project starts on the right foot, I take time to look
        into deep market research, competitive analysis, and strategic planning.
        It&apos;s about laying a solid foundation of understanding to guide
        every creative choice.
      </>
    ),
  },
  {
    title: (
      <>
        <DesignServicesIcon fontSize="large" /> Design
      </>
    ),
    description: (
      <>
        With a&nbsp;solid understanding of the project&apos;s goals, I&nbsp;can
        start crafting a&nbsp;design that will help you achieve them. I&apos;ll
        create wireframes, mockups, and prototypes to test ideas and iterate
        towards the perfect solution.
      </>
    ),
  },
  {
    title: (
      <>
        <HandymanIcon fontSize="large" /> Develop
      </>
    ),
    description: (
      <>
        I&nbsp;develop solutions with a&nbsp;focus on good design, scalable
        systems, and new technologies, always keeping the end user and business
        goals in mind.&nbsp;I believe in the power of working together and am
        always excited to learn and grow.
      </>
    ),
  },
  {
    title: (
      <>
        <FlareIcon fontSize="large" /> Quality Assurance
      </>
    ),
    description: (
      <>
        I&apos;ll make sure that your project is ready for the real world.
        I&nbsp;test across multiple environments and devices to ensure that your
        product looks and functions as intended. I&apos;ll also work with you to
        establish a&nbsp;plan for ongoing maintenance and future updates.
      </>
    ),
  },
];

export default function DevelopmentProcess({ sx }: { sx?: SxProps }) {
  return (
    <Container sx={sx} maxWidth="lg">
      <Typography
        fontFamily={oswald.style.fontFamily}
        variant="h6"
        fontWeight="bold"
        color="primary"
      >
        How I work
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <Stack>
            <Typography
              fontFamily={oswald.style.fontFamily}
              variant="h3"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Better design, <br /> better experiences
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={6}>
          <Stack spacing={8}>
            {phases.map((phase, index) => (
              <Stack key={index}>
                <Typography
                  fontFamily={oswald.style.fontFamily}
                  variant="h4"
                  fontWeight="bold"
                  color="primary"
                >
                  {phase.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ mt: 2 }}
                  textAlign="justify"
                  fontWeight="Regular"
                >
                  {phase.description}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
