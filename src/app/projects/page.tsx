import Stack from '@mui/material/Stack';
import ProjectsTitle from '@/app/projects/components/title';
import ProjectsGrid from '@/app/projects/components/project-grid'
import CallToAction from '@/app/projects/components/call-to-action'

export default async function ProjectsOverview() {
  return (
    <Stack>
        <ProjectsTitle />
        <ProjectsGrid/>
        <CallToAction/>
    </Stack>
  );
}
