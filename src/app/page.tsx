import Stack from '@mui/material/Stack';
import Intro from '@/app/landing-page/components/intro';
import Container from '@mui/material/Container';
import Technologies from '@/app/landing-page/components/technologies';
import DevelopmentProcess from '@/app/landing-page/components/development-process';
import Services from '@/app/landing-page/components/services';
import FullScreenContainer from '@/components/full-screen-container';
import LatestWork from '@/app/landing-page/components/latest-work';
import CallToAction from '@/app/landing-page/components/call-to-action';
import Philosophy from '@/app/landing-page/components/philosophy';
import { Suspense } from 'react';

export default function LandingPage() {
  return (
    <Stack overflow="hidden">
      <Container maxWidth="lg" sx={{ my: '25vh' }}>
        <Suspense>
          <Intro />
        </Suspense>
      </Container>

      <FullScreenContainer className="snap-y">
        <Services />
      </FullScreenContainer>

      <FullScreenContainer className="snap-y">
        <DevelopmentProcess />
      </FullScreenContainer>

      <FullScreenContainer className="snap-y">
        <Technologies sx={{ width: '100vw' }} />
      </FullScreenContainer>

      <FullScreenContainer>
        <Philosophy />
      </FullScreenContainer>

      <Suspense>
        <LatestWork />
      </Suspense>

      <FullScreenContainer className="snap-y">
        <CallToAction />
      </FullScreenContainer>
    </Stack>
  );
}
