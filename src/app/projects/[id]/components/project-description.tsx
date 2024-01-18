import { ProjectDetail } from '@/app/projects/schemas/projects';
import FullScreenContainer from '@/components/full-screen-container';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FadeIn from '@/components/transitions/fade-in';

export default function ProjectDescription({ data }: { data: ProjectDetail }) {
  return (
    <FullScreenContainer>
      <Container maxWidth="xl">
        <FadeIn direction="right">
          <Typography variant="h6" textAlign="justify" fontWeight="lighter">
            {data.description}
          </Typography>
        </FadeIn>
      </Container>
    </FullScreenContainer>
  );
}
