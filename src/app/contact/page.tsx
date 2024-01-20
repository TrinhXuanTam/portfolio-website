import Container from '@mui/material/Container';
import ContactDetails from '@/app/contact/components/contact-details';
import ContactForm from '@/app/contact/components/contact-form';
import Grid from '@mui/material/Grid';
import { Suspense } from 'react';

export default function ContactPage() {
  return (
    <Container maxWidth="xl" sx={{ my: '25vh' }}>
      <Grid container rowSpacing="25vh" columnSpacing="5vw">
        <Grid item xs={12} lg={7} xl={6}>
          <Suspense>
            <ContactDetails />
          </Suspense>
        </Grid>

        <Grid item xs={12} sm={12} lg={5} xl={6}>
          <ContactForm sx={{ width: '100%' }} />
        </Grid>
      </Grid>
    </Container>
  );
}
