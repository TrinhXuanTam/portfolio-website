import Stack from '@mui/material/Stack';
import Intro from '@/components/landing-page/intro';
import Container from '@mui/material/Container';
import Technologies from '@/components/landing-page/technologies';
import DevelopmentProcess from '@/components/landing-page/development-process';
import Services from '@/components/landing-page/services';
import FullScreenContainer from '@/components/full-screen-container';
import LatestWork from '@/components/landing-page/latest-work';
import CallToAction from '@/components/landing-page/call-to-action';

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

      <Technologies sx={{ mt: 15, mb: 30 }} />

      <FullScreenContainer>
        <LatestWork />
      </FullScreenContainer>

      <FullScreenContainer>
        <CallToAction />
      </FullScreenContainer>
    </Stack>
  );
}
