import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import RoundedButton from '@/components/buttons/rounded-button';
import Container from '@mui/material/Container';
import { SxProps } from '@mui/material';
import FadeIn from '@/components/transitions/fade-in';

export default function CallToAction({ sx }: { sx?: SxProps }) {
  return (
    <Container sx={sx} maxWidth="lg">
      <FadeIn>
        <Stack alignItems="center" spacing={3}>
          <Stack direction="row">
            <Typography
              fontFamily={oswald.style.fontFamily}
              variant="h3"
              fontWeight="bold"
              sx={{ mr: 2 }}
            >
              Ready to start your project?
            </Typography>
            <Typography
              fontFamily={oswald.style.fontFamily}
              variant="h3"
              fontWeight="bold"
              textTransform="uppercase"
              color="primary"
            >
              Let&apos; s talk
            </Typography>
          </Stack>

          <Typography variant="subtitle1">
            If you have a project that you want to get started, think you need
            my help with something or just fancy saying hey, then get in touch.
          </Typography>

          <Stack direction="row" spacing={3}>
            <RoundedButton variant="contained" color="primary" size="large">
              Contact me
            </RoundedButton>

            <RoundedButton variant="outlined" color="primary" size="large">
              More about me
            </RoundedButton>

            <RoundedButton variant="outlined" color="primary" size="large">
              See my resume
            </RoundedButton>
          </Stack>
        </Stack>
      </FadeIn>
    </Container>
  );
}
