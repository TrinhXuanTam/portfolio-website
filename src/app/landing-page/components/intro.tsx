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
import { getCvUrl } from '@/app/about/api/cv';
import { getProfiles } from '@/app/about/api/contact';
import Grid from '@mui/material/Grid';
import AnimatedNavigationLink from '@/components/transitions/animated-navigation-link';
import Routes from '@/utils/routes';

export default async function Intro({ sx }: { sx?: SxProps }) {
  const cvUrl = await getCvUrl();
  const profiles = await getProfiles();

  return (
    <Grid container sx={sx} rowSpacing="10vh">
      <Grid item xs={12} sm={6}>
        <Stack>
          <FadeIn direction="down">
            <Typography
              fontFamily={oswald.style.fontFamily}
              color="primary"
              fontWeight="bold"
              textTransform="uppercase"
              fontSize={{
                xs: '1.5rem',
                sm: '1.7rem',
                md: '2rem',
              }}
            >
              Software Engineer
            </Typography>
            <Typography
              fontFamily={oswald.style.fontFamily}
              variant="h2"
              fontWeight="bold"
              textTransform="uppercase"
              fontSize={{
                xs: '3rem',
                sm: '3.5rem',
                md: '4rem',
              }}
            >
              Trinh Xuan Tam
            </Typography>
          </FadeIn>
          <FadeIn direction="down" delay={0.3}>
            <Box sx={{ mt: 3 }}>
              <Typography
                variant="subtitle1"
                fontWeight="lighter"
                fontSize={{
                  xs: '0.9rem',
                  sm: '1rem',
                  md: '1.1rem',
                }}
              >
                Full-Stack Software Engineer based in Prague, Czech Republic.
              </Typography>
              <Stack direction="row" spacing={1}>
                <Typography
                  variant="subtitle1"
                  fontWeight="lighter"
                  fontSize={{
                    xs: '0.9rem',
                    sm: '1rem',
                    md: '1.1rem',
                  }}
                >
                  Need assistance with your project?
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.primary"
                  fontWeight="bold"
                  fontSize={{
                    xs: '0.9rem',
                    sm: '1rem',
                    md: '1.1rem',
                  }}
                >
                  Let&#39;s talk!
                </Typography>
              </Stack>
            </Box>
          </FadeIn>

          <FadeIn direction="down" delay={0.5}>
            <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
              <AnimatedNavigationLink href={Routes.Contact}>
                <RoundedButton
                  color="secondary"
                  variant="contained"
                  size="large"
                >
                  Get in touch
                </RoundedButton>
              </AnimatedNavigationLink>
              <RoundedButton
                component="a"
                variant="outlined"
                size="large"
                href={cvUrl}
              >
                See my CV
              </RoundedButton>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
              <IconButton
                size="large"
                href={profiles.linkedinUrl}
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
                href={profiles.githubUrl}
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
      </Grid>
      <Grid item xs={12} sm={6} display='flex' justifyContent='center'>
        <FadeIn direction="right">
          <RhombusBox
            position="relative"
            sx={{
              width: {
                xs: '20rem',
                md: '32rem',
              },
              height: {
                xs: '20rem',
                md: '32rem',
              },
              borderTopLeftRadius: '50%',
              borderBottomLeftRadius: '50%',
              borderBottomRightRadius: '50%',
              borderTopRightRadius: {
                xs: '50%',
                sm: '0%',
              },
              overflow: 'hidden',
            }}
          >
            <Image
              src={introImage}
              alt="Intro image"
              fill={true}
              objectFit="contain"
            />
          </RhombusBox>
        </FadeIn>
      </Grid>
    </Grid>
  );
}
