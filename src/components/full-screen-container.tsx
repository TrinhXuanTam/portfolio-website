import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';

export default function FullScreenContainer({
  children,
  className,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps;
  className?: string;
}) {
  return (
    <Box
      className={className}
      sx={{ ...sx, minHeight: '100vh', display: 'flex', alignItems: 'center' }}
    >
      {children}
    </Box>
  );
}
