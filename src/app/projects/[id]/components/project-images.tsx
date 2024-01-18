import { ProjectDetail } from '@/app/projects/schemas/projects';
import FullScreenContainer from '@/components/full-screen-container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

export default function ProjectImages({ data }: { data: ProjectDetail }) {
  const getGridSize = (index: number) => {
    const pattern = [12, 6, 6, 12];
    return pattern[index % pattern.length];
  };

  return (
    <Grid>
      <FullScreenContainer>
        <Grid container spacing={2}>
          {data.imageUrls.map((image, index) => (
            <Grid key={index} item xs={getGridSize(index)}>
              <FullScreenContainer sx={{ position: 'relative' }}>
                <Image
                  src={image}
                  alt={data.name}
                  fill={true}
                  objectFit="cover"
                />
              </FullScreenContainer>
            </Grid>
          ))}
        </Grid>
      </FullScreenContainer>
    </Grid>
  );
}
