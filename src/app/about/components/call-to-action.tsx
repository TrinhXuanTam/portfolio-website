import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import RoundedButton from '@/components/buttons/rounded-button';
import Container from '@mui/material/Container';
import { SxProps } from '@mui/material';
import FadeIn from '@/components/transitions/fade-in';
import FullScreenContainer from '@/components/full-screen-container';

export default function CallToAction({ sx }: { sx?: SxProps }) {
  return (
    <FullScreenContainer className="snap-y">
      <Container sx={sx} maxWidth="xl">
        <FadeIn>
          <Stack alignItems="center" spacing={7}>
            <Stack justifyContent="center" alignItems="center">
              <Typography
                fontFamily={oswald.style.fontFamily}
                variant="h1"
                fontWeight="bold"
                textTransform="uppercase"
                sx={{ mr: 2 }}
              >
                Want a quick chat?
              </Typography>
              <Typography
                fontFamily={oswald.style.fontFamily}
                variant="h1"
                fontWeight="bold"
                textTransform="uppercase"
                color="primary"
              >
                Let&apos;s grab a coffee
              </Typography>
            </Stack>

            <Typography variant="h6" fontWeight="lighter">
              If you have any questions or just want to say hi, feel free to
              send me a message.
            </Typography>

            <Stack direction="row" spacing={3}>
              <RoundedButton variant="contained" color="secondary" size="large">
                Send me a message
              </RoundedButton>

              <RoundedButton variant="outlined" color="primary" size="large">
                View Full CV
              </RoundedButton>

              <RoundedButton variant="outlined" color="primary" size="large">
                See my projects
              </RoundedButton>
            </Stack>
          </Stack>
        </FadeIn>
      </Container>
    </FullScreenContainer>
  );
}
