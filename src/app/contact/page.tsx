import FullScreenContainer from '@/components/full-screen-container';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import ContactDetails from '@/app/contact/components/contact-details';
import ContactForm from '@/app/contact/components/contact-form';
import { Suspense } from 'react';

export default function ContactPage() {
  return (
    <FullScreenContainer>
      <Container maxWidth="xl">
        <Stack direction="row" justifyContent="space-between" height="60vh">
          <Suspense>
            <ContactDetails sx={{ flex: 1 }} />
          </Suspense>
          <ContactForm sx={{ flex: 1, ml: 10, height: '100%' }} />
        </Stack>
      </Container>
    </FullScreenContainer>
  );
}
