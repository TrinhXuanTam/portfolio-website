'use client';

import { SxProps } from '@mui/system';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material';

export default function ProjectCard({
  sx,
  thumbnailUrl,
  name,
}: {
  sx?: SxProps;
  thumbnailUrl: string;
  name: string;
}) {
  const theme = useTheme();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
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
            <CardMedia
              component="img"
              image={thumbnailUrl}
              alt={name}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            />
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
              <CardContent>
                <Typography
                  fontFamily={oswald.style.fontFamily}
                  gutterBottom
                  variant="h4"
                  fontWeight="medium"
                >
                  {name}
                </Typography>
              </CardContent>
            </motion.div>
          </motion.div>
        </CardActionArea>
      </Card>
    </motion.div>
  );
}
