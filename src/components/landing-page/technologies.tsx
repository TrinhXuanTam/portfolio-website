'use client';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Stack from '@mui/material/Stack';
import Marquee from 'react-fast-marquee';
import useTheme from '@mui/material/styles/useTheme';
import { SxProps } from '@mui/system';
import Image from 'next/image';
import javascript from '@/assets/images/logos/javascript.svg';
import typescript from '@/assets/images/logos/typescript.svg';
import react from '@/assets/images/logos/react.svg';
import tailwind from '@/assets/images/logos/tailwind.svg';
import vue from '@/assets/images/logos/vue.svg';
import node from '@/assets/images/logos/node.svg';
import html from '@/assets/images/logos/html.svg';
import css from '@/assets/images/logos/css.svg';
import next from '@/assets/images/logos/next.svg';
import nest from '@/assets/images/logos/nest.svg';
import flutter from '@/assets/images/logos/flutter.svg';
import firebase from '@/assets/images/logos/firebase.svg';
import docker from '@/assets/images/logos/docker.svg';
import aws from '@/assets/images/logos/aws.svg';
import python from '@/assets/images/logos/python.svg';
import fastapi from '@/assets/images/logos/fastapi.svg';
import django from '@/assets/images/logos/django.svg';
import cpp from '@/assets/images/logos/cpp.svg';
import c from '@/assets/images/logos/c.svg';
import java from '@/assets/images/logos/java.svg';
import springboot from '@/assets/images/logos/springboot.svg';
import git from '@/assets/images/logos/git.svg';
import bootstrap from '@/assets/images/logos/bootstrap.svg';
import quasar from '@/assets/images/logos/quasar.svg';
import dart from '@/assets/images/logos/dart.svg';
import figma from '@/assets/images/logos/figma.svg';
import gitlab from '@/assets/images/logos/gitlab.svg';
import github from '@/assets/images/logos/github.svg';
import jira from '@/assets/images/logos/jira.svg';
import FadeIn from '@/components/transitions/fade-in';

export default function Technologies({ sx }: { sx?: SxProps }) {
  const theme = useTheme();

  const images = [
    css,
    html,
    node,
    javascript,
    typescript,
    bootstrap,
    tailwind,
    react,
    vue,
    quasar,
    next,
    nest,
    flutter,
    dart,
    firebase,
    docker,
    aws,
    python,
    fastapi,
    django,
    cpp,
    c,
    java,
    springboot,
    git,
    gitlab,
    github,
    jira,
    figma,
  ];

  return (
    <FadeIn>
      <Stack sx={sx} spacing={5} alignItems="center">
        <Stack direction="row" spacing={2}>
          <Typography
            fontFamily={oswald.style.fontFamily}
            variant="h3"
            fontWeight="medium"
          >
            I love to work with a wide range of
          </Typography>

          <Typography
            fontFamily={oswald.style.fontFamily}
            variant="h3"
            fontWeight="bold"
            color="primary"
          >
            Technologies
          </Typography>
        </Stack>

        <Marquee
          direction="left"
          gradient={true}
          gradientColor={theme.palette.background.default}
          gradientWidth="50%"
          speed={20}
        >
          <Stack direction="row" spacing={8} sx={{ ml: 8 }}>
            {images.map((image, index) => (
              <Image key={index} src={image} alt="javascript" height={50} />
            ))}
          </Stack>
        </Marquee>
      </Stack>
    </FadeIn>
  );
}
