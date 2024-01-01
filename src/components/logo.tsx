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
    </>
  );
}
