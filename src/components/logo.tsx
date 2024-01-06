import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Stack from '@mui/material/Stack';

export default function Logo() {
  return (
    <Stack direction="row">
      <Typography
        fontFamily={oswald.style.fontFamily}
        variant="h4"
        noWrap
        sx={{
          fontWeight: 'bold',
          userSelect: 'none',
        }}
        color="primary"
      >
        .
      </Typography>
      <Typography
        fontFamily={oswald.style.fontFamily}
        variant="h4"
        noWrap
        sx={{
          fontWeight: 'bold',
          userSelect: 'none',
        }}
      >
        TXT
      </Typography>
    </Stack>
  );
}
