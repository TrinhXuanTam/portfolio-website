import Stack from '@mui/material/Stack';
import { getProjectDetail } from '@/app/projects/api/projects';
import ProjectIntro from '@/app/projects/[id]/components/project-intro';
import ProjectDescription from '@/app/projects/[id]/components/project-description';
import ProjectImages from '@/app/projects/[id]/components/project-images';

export default async function ProjectDetail({
  params,
}: {
  params: { id: string };
}) {
  const data = await getProjectDetail(params.id);
  return (
    <Stack overflow="hidden">
      <ProjectIntro data={data} sx={{ mt: '25vh' }} />
      <ProjectDescription data={data} sx={{ my: '5vh' }} />
      <ProjectImages data={data} />
    </Stack>
  );
}
