import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import RoundedButton from '@/components/buttons/rounded-button';
import Container from '@mui/material/Container';
import { SxProps } from '@mui/material';
import FadeIn from '@/components/transitions/fade-in';
import AnimatedNavigationLink from '@/components/transitions/animated-navigation-link';
import Routes from '@/utils/routes';

export default function CallToAction({ sx }: { sx?: SxProps }) {
  return (
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
              Let&apos;s build
            </Typography>
            <Typography
              fontFamily={oswald.style.fontFamily}
              variant="h1"
              fontWeight="bold"
              textTransform="uppercase"
              color="primary"
            >
              something together
            </Typography>
          </Stack>

          <Typography variant="h6" fontWeight="lighter">
            If you have a project that you want to get started, think you need
            my help with something or just fancy saying hey, then get in touch.
          </Typography>

          <Stack direction="row" spacing={3}>
            <RoundedButton variant="contained" color="secondary" size="large">
              Get started
            </RoundedButton>

            <AnimatedNavigationLink href={Routes.About}>
              <RoundedButton variant="outlined" color="primary" size="large">
                More about me
              </RoundedButton>
            </AnimatedNavigationLink>
          </Stack>
        </Stack>
      </FadeIn>
    </Container>
  );
}
