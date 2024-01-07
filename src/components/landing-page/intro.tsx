import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/material';
import RoundedButton from '@/components/buttons/rounded-button';
import introImage from '@/assets/images/intro-picture.png';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
import RhombusBox from '@/components/boxes/rhombus-box';
import FadeIn from '@/components/transitions/fade-in';

export default function Intro({ sx }: { sx?: SxProps }) {
  return (
    <Stack sx={sx} direction="row" justifyContent="space-between">
      <Stack>
        <FadeIn direction="down">
          <Typography
            fontFamily={oswald.style.fontFamily}
            color="primary"
            variant="h5"
            sx={{
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}
          >
            Software Engineer
          </Typography>
          <Typography
            fontFamily={oswald.style.fontFamily}
            variant="h2"
            sx={{
              mt: 1,
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}
          >
            Trinh Xuan Tam
          </Typography>
        </FadeIn>
        <FadeIn direction="down" delay={0.3}>
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle1">
              Full-Stack Software Engineer based in Prague, Czech Republic.
            </Typography>
            <Stack direction="row" spacing={1}>
              <Typography variant="subtitle1">
                Need assistance with your project?
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.primary"
                sx={{ fontWeight: 'bold' }}
              >
                Let&#39;s talk!
              </Typography>
            </Stack>
          </Box>
        </FadeIn>

        <FadeIn direction="down" delay={0.5}>
          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            <RoundedButton variant="contained" size="large">
              Get in touch
            </RoundedButton>
            <RoundedButton variant="outlined" size="large">
              Download CV
            </RoundedButton>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            <IconButton
              size="large"
              href={process.env.LINKEDIN_URL!}
              sx={{
                color: 'text.primary',
                padding: 0,
                '&:hover': { color: 'primary.main' },
              }}
            >
              <LinkedInIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              size="large"
              href={process.env.GITHUB_URL!}
              sx={{
                color: 'text.primary',
                padding: 0,
                '&:hover': { color: 'primary.main' },
              }}
            >
              <GitHubIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        </FadeIn>
      </Stack>

      <FadeIn direction="right">
        <RhombusBox
          sx={{
            height: 500,
            width: 500,
            borderTopLeftRadius: '50%',
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
            overflow: 'hidden',
          }}
        >
          <Image src={introImage} alt="Intro image" height={500} />
        </RhombusBox>
      </FadeIn>
    </Stack>
  );
}
