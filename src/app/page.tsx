import Stack from '@mui/material/Stack';
import Intro from '@/components/intro';
import Box from '@mui/material/Box';

export default function LandingPage() {
  return (
    <Stack>
      <Box sx={{ mt: 15 }}>
        <Intro />
      </Box>
    </Stack>
  );
}
