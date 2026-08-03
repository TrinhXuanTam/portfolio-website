import Stack from '@mui/material/Stack';
import { getProjectDetail } from '@/app/projects/api/projects';
import ProjectIntro from '@/app/projects/[id]/components/project-intro';
import ProjectDescription from '@/app/projects/[id]/components/project-description';
import ImageGallery from '@/app/projects/[id]/components/image-gallery';

export default async function ProjectDetail({
  params,
}: {
  params: { id: string };
}) {
  const data = await getProjectDetail(params.id);
  return (
    <Stack overflow="hidden">
      <ProjectIntro data={data} sx={{ pt: { xs: '12vh', md: '14vh' } }} />
      <ProjectDescription data={data} sx={{ my: '5vh' }} />
      <ImageGallery images={data.imageUrls} alt={data.name} />
    </Stack>
  );
}
