import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import RoundedButton from '@/components/buttons/rounded-button';
import { SxProps } from '@mui/material';
import FadeIn from '@/components/transitions/fade-in';
import ProjectCard from '@/app/projects/components/project-card';
import { getProjectsOverview } from '@/app/projects/api/projects';
import AnimatedNavigationLink from '@/components/transitions/animated-navigation-link';
import Routes from '@/utils/routes';

export default async function LatestWork({ sx }: { sx?: SxProps }) {
  const allProjects = await getProjectsOverview();
  const projects = allProjects.slice(0, 3);

  return (
    <Container sx={sx} maxWidth="lg">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <FadeIn direction="left">
          <Stack justifyContent="center">
            <Typography
              fontFamily={oswald.style.fontFamily}
              lineHeight={1.2}
              fontWeight="bold"
              fontSize={{
                xs: '1.5rem',
                sm: '2.4rem',
                md: '3rem',
                lg: '3.3rem',
              }}
            >
              Check out some of my
            </Typography>
            <Typography
              fontFamily={oswald.style.fontFamily}
              lineHeight={1.2}
              fontWeight="bold"
              textTransform="uppercase"
              color="primary"
              fontSize={{
                xs: '1.5rem',
                sm: '2.8rem',
                md: '3.6rem',
                lg: '4rem',
              }}
            >
              latest projects
            </Typography>
          </Stack>
        </FadeIn>

        <FadeIn direction="right">
          <AnimatedNavigationLink href={Routes.Projects}>
            <RoundedButton variant="outlined" color="primary" size="large">
              See all projects
            </RoundedButton>
          </AnimatedNavigationLink>
        </FadeIn>
      </Stack>

      {projects.map((project, index) => (
        <FadeIn key={index} once={true} direction="down">
          <ProjectCard
            project={project}
            sx={{
              height: {
                xs: '25vh',
                sm: '40vh',
              },
              my: 5,
            }}
          />
        </FadeIn>
      ))}
    </Container>
  );
}
