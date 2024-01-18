import FullScreenContainer from '@/components/full-screen-container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Container from '@mui/material/Container';
import Image from 'next/image';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ProjectDetail } from '@/app/projects/schemas/projects';
import FadeIn from '@/components/transitions/fade-in';
import Box from '@mui/material/Box';

export default function ProjectIntro({ data }: { data: ProjectDetail }) {
  return (
    <FullScreenContainer>
      <Container maxWidth="xl">
        <Stack direction="row" width="100%" spacing={10}>
          <Stack flex={1} justifyContent="space-between">
            <Stack>
              <FadeIn direction="left">
                <Typography
                  variant="h1"
                  sx={{ fontFamily: oswald }}
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  {data.name}
                </Typography>
              </FadeIn>

              <FadeIn direction="left" delay={0.2}>
                <Typography
                  variant="subtitle1"
                  fontWeight="lighter"
                  textAlign="justify"
                >
                  {data.briefDescription}
                </Typography>
              </FadeIn>
            </Stack>

            <FadeIn direction="down" delay={0.6}>
              <Stack direction="row" justifyContent="space-between">
                <Stack>
                  <Typography
                    sx={{ fontFamily: oswald }}
                    color="primary"
                    variant="h6"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    Roles
                  </Typography>

                  <List sx={{ py: 0 }}>
                    {data.roles.map((role, index) => (
                      <ListItem key={index} sx={{ pl: 0 }}>
                        <Typography fontWeight="lighter">{role}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </Stack>

                <Stack>
                  <Typography
                    sx={{ fontFamily: oswald }}
                    color="primary"
                    variant="h6"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    Responsibilities
                  </Typography>

                  <List sx={{ py: 0 }}>
                    {data.responsibilities.map((responsibility, index) => (
                      <ListItem key={index} sx={{ pl: 0 }}>
                        <Typography fontWeight="lighter">
                          {responsibility}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Stack>

                <Stack>
                  <Typography
                    sx={{ fontFamily: oswald }}
                    color="primary"
                    variant="h6"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    Technologies
                  </Typography>

                  <List sx={{ py: 0 }}>
                    {data.technologies.map((technology, index) => (
                      <ListItem key={index} sx={{ pl: 0 }}>
                        <Typography fontWeight="lighter">
                          {technology}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              </Stack>
            </FadeIn>
          </Stack>
          <Box flex={1}>
            <FadeIn direction="right" delay={0.4}>
              <Box
                height="70vh"
                position="relative"
                sx={{
                  overflow: 'hidden',
                  borderEndEndRadius: '30%',
                  borderStartStartRadius: '30%',
                }}
              >
                <Image
                  src={data.thumbnailUrl}
                  alt={data.name}
                  fill={true}
                  objectFit="cover"
                />
              </Box>
            </FadeIn>
          </Box>
        </Stack>
      </Container>
    </FullScreenContainer>
  );
}
