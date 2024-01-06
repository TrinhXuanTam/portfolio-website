import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function PageFooter() {
  const now = new Date();

  return (
    <Stack
      padding={2}
      alignItems="center"
      sx={{ backgroundColor: 'background.paper' }}
    >
      <Stack direction="row">
        <Typography variant="subtitle1">
          © {now.getFullYear()} All rights reserved. Designed &
          Implemented by Trinh Xuan Tam
        </Typography>
      </Stack>
    </Stack>
  );
}
