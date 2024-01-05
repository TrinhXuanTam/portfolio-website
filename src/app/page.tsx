import Stack from '@mui/material/Stack';
import Intro from '@/components/intro';
import Container from '@mui/material/Container';
import Technologies from '@/components/technologies';
import DevelopmentProcess from '@/components/development-process';
import Services from '@/components/services';
import FullScreenContainer from '@/components/full-screen-container';

export default function LandingPage() {
  return (
    <Stack>
      <FullScreenContainer>
        <Container maxWidth="lg">
          <Intro />
        </Container>
      </FullScreenContainer>

      <FullScreenContainer>
        <DevelopmentProcess />
      </FullScreenContainer>

      <FullScreenContainer>
        <Services />
      </FullScreenContainer>

      <Technologies />
    </Stack>
  );
}
