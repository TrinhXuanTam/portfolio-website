import Container from '@mui/material/Container';
import { SxProps } from '@mui/system';

export default function AppContainer({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps;
}) {
  return <Container sx={sx} maxWidth="xl">{children}</Container>;
}
