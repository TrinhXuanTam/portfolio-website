import Grid from '@mui/material/Grid';
import { getProjectsOverview } from '@/app/projects/api/projects';
import ProjectCard from '@/app/projects/components/project-card';

export default async function ProjectsGrid() {
  const projects = await getProjectsOverview();

  const mdSize = (index: number) => {
    const pattern = [12, 6, 6, 6, 6];
    return pattern[index % pattern.length];
  };

  const lgSize = (index: number) => {
    const pattern = [8, 4, 4, 4, 4, 4, 8, 4, 4, 4];
    return pattern[index % pattern.length];
  };

  return (
    <Grid container spacing={5} padding={5}>
      {projects.map((project, index) => (
        <Grid key={index} item xs={12} md={mdSize(index)} lg={lgSize(index)}>
          <ProjectCard
            project={project}
            sx={{
              height: {
                xs: '40vh',
                sm: '50vh',
                md: '60vh',
                lg: '70vh',
              },
              boxShadow: 0,
            }}
            scale={1.01}
          />
        </Grid>
      ))}
    </Grid>
  );
}
