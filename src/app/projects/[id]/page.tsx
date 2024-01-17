import Stack from '@mui/material/Stack';
import { getProjectDetail } from '@/app/projects/api/projects';
import ProjectIntro from '@/app/projects/[id]/components/project-intro';

export default async function ProjectDetail({
  params,
}: {
  params: { id: string };
}) {
  const data = await getProjectDetail(params.id);
  console.log(data);

  return (
    <Stack>
      <ProjectIntro data={data} />
    </Stack>
  );
}
