import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';

export default function Logo() {
  return (
    <>
      <Typography
        fontFamily={oswald.style.fontFamily}
        variant="h4"
        noWrap
        sx={{
          fontWeight: 'bold',
        }}
      >
        TXT
      </Typography>
      <Typography
        fontFamily={oswald.style.fontFamily}
        variant="h4"
        noWrap
        sx={{
          fontWeight: 'bold',
        }}
        color="primary"
      >
        .
      </Typography>
    </>
  );
}
