import { ProjectDetail } from '@/app/projects/schemas/projects';
import FullScreenContainer from '@/components/full-screen-container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Box from '@mui/material/Box';

export default function ProjectImages({ data }: { data: ProjectDetail }) {
  return (
    <Grid>
      <FullScreenContainer>
        <Grid container spacing={2}>
          {data.imageUrls.map((image, index) => (
            <Grid key={index} item xs={12}>
              <Box
                sx={{
                  position: 'relative',
                  height: {
                    xs: '30vh',
                    sm: '40vh',
                    md: '100vh',
                  },
                }}
              >
                <Image
                  src={image}
                  alt={data.name}
                  fill={true}
                  objectFit="cover"
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </FullScreenContainer>
    </Grid>
  );
}
