import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Container from '@mui/material/Container';
import Image from 'next/image';
import { ProjectDetail } from '@/app/projects/schemas/projects';
import FadeIn from '@/components/transitions/fade-in';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { SxProps } from '@mui/material';
import SectionHeading from '@/app/projects/[id]/components/section-heading';

/** A labelled list column in the meta row. */
function MetaColumn({ label, items }: { label: string; items: string[] }) {
  return (
    <Stack spacing={1}>
      <Typography
        fontFamily={oswald.style.fontFamily}
        color="primary"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing="0.1em"
        fontSize={{ xs: '0.75rem', sm: '0.85rem' }}
      >
        {label}
      </Typography>
      <Stack spacing={0.5}>
        {items.map((item, i) => (
          <Typography
            key={i}
            fontWeight="lighter"
            fontSize={{ xs: '0.85rem', sm: '1rem' }}
          >
            {item}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
}

export default function ProjectIntro({
  data,
  sx,
}: {
  data: ProjectDetail;
  sx?: SxProps;
}) {
  return (
    <Container maxWidth="lg" sx={sx}>
      {/* Title + brief, centered and spacious. */}
      <FadeIn direction="down">
        <Typography
          fontFamily={oswald.style.fontFamily}
          fontWeight="bold"
          lineHeight={1.05}
          textTransform="uppercase"
          fontSize={{ xs: '2.4rem', sm: '3.5rem', md: '5rem' }}
          sx={{ maxWidth: '18ch' }}
        >
          {data.name}
        </Typography>
      </FadeIn>
      <FadeIn direction="down" delay={0.15}>
        <Typography
          fontWeight="lighter"
          color="text.primary"
          sx={{ mt: 3, maxWidth: '60ch', opacity: 0.9 }}
          fontSize={{ xs: '1rem', md: '1.25rem' }}
        >
          {data.briefDescription}
        </Typography>
      </FadeIn>

      {/* Hero image, full-width and cinematic. */}
      <FadeIn direction="up" delay={0.3}>
        <Box
          sx={{
            position: 'relative',
            mt: { xs: 5, md: 8 },
            height: { xs: '28vh', sm: '38vh', md: '48vh' },
            borderRadius: 4,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <Image
            src={data.thumbnailUrl}
            alt={data.name}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </Box>
      </FadeIn>

      {/* Meta row: roles / responsibilities, and technologies as chips. */}
      <FadeIn direction="up" delay={0.2}>
        <Box sx={{ mt: { xs: 6, md: 10 } }}>
          <SectionHeading>Overview</SectionHeading>
        </Box>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid item xs={6} md={3}>
            <MetaColumn label="Roles" items={data.roles} />
          </Grid>
          <Grid item xs={6} md={4}>
            <MetaColumn label="Responsibilities" items={data.responsibilities} />
          </Grid>
          <Grid item xs={12} md={5}>
            <Stack spacing={1.5}>
              <Typography
                fontFamily={oswald.style.fontFamily}
                color="primary"
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="0.1em"
                fontSize={{ xs: '0.75rem', sm: '0.85rem' }}
              >
                Technologies
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {data.technologies.map((tech, i) => (
                  <Box
                    key={i}
                    sx={{
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 999,
                      border: '1px solid',
                      borderColor: 'primary.main',
                      color: 'text.primary',
                      fontSize: '0.8rem',
                    }}
                  >
                    {tech}
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </FadeIn>
    </Container>
  );
}
