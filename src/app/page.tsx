import Stack from '@mui/material/Stack';
import Intro from '@/components/intro';
import Container from '@mui/material/Container';
import Technologies from '@/components/technologies';
import DevelopmentProcess from '@/components/development-process';
import Services from '@/components/services';

export default function LandingPage() {
  return (
    <Stack sx={{ my: 15 }}>
      <Container sx={{ my: 15 }} maxWidth="lg">
        <Intro />
      </Container>
      <DevelopmentProcess sx={{ my: 15 }} />
      <Services sx={{ my: 15 }} />
      <Technologies sx={{ my: 15 }} />
    </Stack>
  );
}
