import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/material';
import RoundedButton from '@/components/buttons/rounded-button';
import introImage from '@/assets/images/intro-picture.png';
import Image from 'next/image';

export default function Intro({ sx }: { sx?: SxProps }) {
  return (
    <Stack sx={sx} direction="row" justifyContent="space-between">
      <Stack>
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
        <Stack direction="row">
          <RoundedButton variant="contained" size="large" sx={{ mt: 4 }}>
            Get in touch
          </RoundedButton>
        </Stack>
      </Stack>
      <Box
        sx={{
          height: 500,
          width: 500,
          backgroundColor: 'primary.dark',
          borderTopLeftRadius: '50%',
          borderBottomLeftRadius: '50%',
          borderBottomRightRadius: '50%',
          overflow: 'hidden',
        }}
      >
        <Image src={introImage} alt="Intro image" height={500} />
      </Box>
    </Stack>
  );
}
