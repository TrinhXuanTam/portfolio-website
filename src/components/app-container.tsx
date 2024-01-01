import Container from '@mui/material/Container';

export default function AppContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container maxWidth="xl">{children}</Container>;
}
