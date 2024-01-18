import Grid from '@mui/material/Grid';
import { getProjectsOverview } from '@/app/projects/api/projects';
import ProjectCard from '@/app/projects/components/project-card';

export default async function ProjectsGrid() {
  const projects = await getProjectsOverview();

  const getGridSize = (index: number) => {
    const pattern = [8, 4, 4, 4, 4, 4, 8, 4, 4, 4];
    return pattern[index % pattern.length];
  };

  return (
    <Grid container spacing={5} padding={5}>
      {projects.map((project, index) => (
        <Grid key={index} item xs={getGridSize(index)}>
          <ProjectCard project={project} sx={{ height: '70vh' }} scale={1.01} />
        </Grid>
      ))}
    </Grid>
  );
}
