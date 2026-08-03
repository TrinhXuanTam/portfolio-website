import { ProjectDetail } from '@/app/projects/schemas/projects';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FadeIn from '@/components/transitions/fade-in';
import { SxProps } from '@mui/material';
import SectionHeading from '@/app/projects/[id]/components/section-heading';

export default function ProjectDescription({
  data,
  sx,
}: {
  data: ProjectDetail;
  sx?: SxProps;
}) {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 }, ...sx }}>
      <FadeIn direction="up">
        <SectionHeading>About the project</SectionHeading>
      </FadeIn>
      <FadeIn direction="up" delay={0.1}>
        <Typography
          whiteSpace="pre-line"
          color="text.primary"
          fontWeight="lighter"
          sx={{ maxWidth: '70ch', lineHeight: 1.8, opacity: 0.9 }}
          fontSize={{ xs: '0.95rem', sm: '1.1rem' }}
        >
          {data.description}
        </Typography>
      </FadeIn>
    </Container>
  );
}
