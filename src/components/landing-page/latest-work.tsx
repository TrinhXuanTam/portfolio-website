'use client';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import RoundedButton from '@/components/buttons/rounded-button';
import { SxProps } from '@mui/material';
import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { projectsOverview } from '@/api/graphql/query/project';
import { ProjectsOverviewQuery } from '@/schemas/graphql/generated/graphql';
import FadeIn from '@/components/transitions/fade-in';

export default function LatestWork({ sx }: { sx?: SxProps }) {
  const { data, loading } = useQuery<ProjectsOverviewQuery>(projectsOverview);

  return (
    <Container sx={sx} maxWidth="lg">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <FadeIn direction="left">
          <Stack justifyContent="center">
            <Typography
              fontFamily={oswald.style.fontFamily}
              variant="h4"
              fontWeight="bold"
            >
              Check out some of my
            </Typography>
            <Typography
              fontFamily={oswald.style.fontFamily}
              variant="h3"
              fontWeight="bold"
              textTransform="uppercase"
              color="primary"
            >
              latest projects
            </Typography>
          </Stack>
        </FadeIn>

        <FadeIn direction="right">
          <RoundedButton variant="outlined" color="primary" size="large">
            See all projects
          </RoundedButton>
        </FadeIn>
      </Stack>

      <FadeIn>
        <Grid container spacing={5} sx={{ mt: 1 }}>
          {Array.from(Array(4).keys()).map((value) => (
            <Grid key={value} item xs={6}>
              <Skeleton variant="rounded" height="32vh" />
            </Grid>
          ))}
        </Grid>
      </FadeIn>
    </Container>
  );
}
