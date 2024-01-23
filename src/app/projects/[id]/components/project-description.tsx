import { ProjectDetail } from '@/app/projects/schemas/projects';
import FullScreenContainer from '@/components/full-screen-container';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FadeIn from '@/components/transitions/fade-in';
import { SxProps } from '@mui/material';

export default function ProjectDescription({
  data,
  sx,
}: {
  data: ProjectDetail;
  sx?: SxProps;
}) {
  return (
    <FullScreenContainer sx={sx}>
      <Container maxWidth="xl">
        <FadeIn direction="right">
          <Typography
            whiteSpace="pre-line"
            textAlign="justify"
            fontWeight="lighter"
            fontSize={{
              xs: '0.8rem',
              sm: '1.1rem',
            }}
          >
            {data.description}
          </Typography>
        </FadeIn>
      </Container>
    </FullScreenContainer>
  );
}
