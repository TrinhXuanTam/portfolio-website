import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';

export default function FullScreenContainer({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps;
}) {
  return (
    <Box sx={{ ...sx, height: '100vh', display: 'flex', alignItems: 'center' }}>
      {children}{' '}
    </Box>
  );
}
