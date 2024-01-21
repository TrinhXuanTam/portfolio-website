import Stack from '@mui/material/Stack';
import Greeting from '@/app/about/components/greeting';
import DetailedIntroduction from '@/app/about/components/detailed-introduction';
import CallToAction from '@/app/about/components/call-to-action';
import Experience from '@/app/about/components/experience';
import Education from '@/app/about/components/education';
import { Suspense } from 'react';

export default function About() {
  return (
    <Stack pb={30} overflow="hidden">
      <Greeting />
      <Suspense>
        <Experience />
        <Education />
        <DetailedIntroduction />
        <CallToAction />
      </Suspense>
    </Stack>
  );
}
