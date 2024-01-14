import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import RoundedButton from '@/components/buttons/rounded-button';
import { SxProps } from '@mui/material';
import FadeIn from '@/components/transitions/fade-in';
import ProjectCard from '@/app/projects/components/project-card';
import { getProjectsOverview } from '@/app/projects/api/projects';

export default async function LatestWork({ sx }: { sx?: SxProps }) {
  const projects = await getProjectsOverview();

  return (
    <Container sx={sx} maxWidth="lg">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <FadeIn direction="left">
          <Stack justifyContent="center">
            <Typography
              fontFamily={oswald.style.fontFamily}
              variant="h3"
              fontWeight="bold"
            >
              Check out some of my
            </Typography>
            <Typography
              fontFamily={oswald.style.fontFamily}
              variant="h2"
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

      <Grid container spacing={5} sx={{ mt: 1 }}>
        {projects.slice(0, 4).map((project, index) => (
          <Grid key={project.id} item xs={6}>
            <FadeIn delay={index * 0.2}>
              <ProjectCard
                sx={{ height: '32vh' }}
                thumbnailUrl={project.thumbnailUrl}
                name={project.name}
              />
            </FadeIn>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
