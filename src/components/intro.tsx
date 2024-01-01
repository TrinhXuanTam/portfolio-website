import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';

export default function Intro() {
  return (
    <Stack>
      <Stack spacing={1}>
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
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}
        >
          Trinh Xuan Tam
        </Typography>
      </Stack>
    </Stack>
  );
}
