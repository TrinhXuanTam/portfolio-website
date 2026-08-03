import Container from '@mui/material/Container';
import ContactDetails from '@/app/contact/components/contact-details';
import ContactForm from '@/app/contact/components/contact-form';
import Grid from '@mui/material/Grid';
import { Suspense } from 'react';
import FadeIn from '@/components/transitions/fade-in';

export default function ContactPage() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        pt: { xs: '14vh', md: '10vh' },
        pb: '8vh',
      }}
    >
      <Grid container rowSpacing="8vh" columnSpacing="5vw" alignItems="center">
        <Grid item xs={12} md={6}>
          <FadeIn direction="left">
            <Suspense>
              <ContactDetails />
            </Suspense>
          </FadeIn>
        </Grid>

        <Grid item xs={12} md={6}>
          <FadeIn direction="right">
            <ContactForm sx={{ width: '100%' }} />
          </FadeIn>
        </Grid>
      </Grid>
    </Container>
  );
}
