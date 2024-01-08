import Stack from '@mui/material/Stack';
import Intro from '@/app/landing-page/components/intro';
import Container from '@mui/material/Container';
import Technologies from '@/app/landing-page/components/technologies';
import DevelopmentProcess from '@/app/landing-page/components/development-process';
import Services from '@/app/landing-page/components/services';
import FullScreenContainer from '@/components/full-screen-container';
import LatestWork from '@/app/landing-page/components/latest-work';
import CallToAction from '@/app/landing-page/components/call-to-action';

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
