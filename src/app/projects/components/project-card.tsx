'use client';

import { SxProps } from '@mui/system';
import { motion, useScroll, useTransform } from 'framer-motion';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material';
import { useRef } from 'react';
import { ProjectOverview } from '@/app/projects/schemas/projects';
import AnimatedNavigationLink from '@/components/transitions/animated-navigation-link';
import Routes from '@/utils/routes';

export default function ProjectCard({
  sx,
  project,
  damping = 15,
  scale = 1.05,
}: {
  sx?: SxProps;
  project: ProjectOverview;
  damping?: number;
  scale?: number;
}) {
  const ref = useRef(null);
  const theme = useTheme();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], ['-20%', '0%']);

  return (
    <AnimatedNavigationLink href={`${Routes.Projects}/${project.id}`}>
      <motion.div
        ref={ref}
        whileHover={{ scale: scale }}
        transition={{ type: 'spring', stiffness: 400, damping: damping }}
      >
        <Card sx={sx}>
          <CardActionArea sx={{ position: 'relative', height: '100%' }}>
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            >
              <motion.img
                src={project.thumbnailUrl}
                alt={project.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  translateY,
                }}
              ></motion.img>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.8 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: theme.palette.secondary.dark,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                  }}
                >
                  <Typography
                    fontFamily={oswald.style.fontFamily}
                    gutterBottom
                    variant="h4"
                    fontWeight="medium"
                    textAlign="center"
                  >
                    {project.name}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    fontWeight="lighter"
                    textAlign="center"
                  >
                    {project.briefDescription}
                  </Typography>
                </CardContent>
              </motion.div>
            </motion.div>
          </CardActionArea>
        </Card>
      </motion.div>
    </AnimatedNavigationLink>
  );
}
