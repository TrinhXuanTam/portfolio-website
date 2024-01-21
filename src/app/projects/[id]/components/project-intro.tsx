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
import Grid from '@mui/material/Grid';
import { SxProps } from '@mui/material';

export default function ProjectIntro({
  data,
  sx,
}: {
  data: ProjectDetail;
  sx?: SxProps;
}) {
  return (
    <Container maxWidth="xl" sx={sx}>
      <Grid
        container
        columnSpacing={{
          md: 10,
        }}
        rowSpacing="25vh"
      >
        <Grid item xs={12} md={6}>
          <Box mb="10vh">
            <FadeIn direction="left">
              <Typography
                sx={{ fontFamily: oswald }}
                fontWeight="bold"
                textTransform="uppercase"
                fontSize={{
                  xs: '1.7rem',
                  sm: '2.8rem',
                  md: '4rem',
                  lg: '5.5rem',
                }}
              >
                {data.name}
              </Typography>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <Typography
                variant="subtitle1"
                fontWeight="lighter"
                textAlign="justify"
                fontSize={{
                  xs: '0.8rem',
                  sm: '1.1rem',
                }}
              >
                {data.briefDescription}
              </Typography>
            </FadeIn>
          </Box>
          <FadeIn direction="down" delay={0.6}>
            <Stack direction="row" justifyContent="space-between">
              <Stack>
                <Typography
                  sx={{ fontFamily: oswald }}
                  color="primary"
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize={{
                    xs: '0.8rem',
                    sm: '1.1rem',
                  }}
                >
                  Roles
                </Typography>

                <List sx={{ py: 0 }}>
                  {data.roles.map((role, index) => (
                    <ListItem key={index} sx={{ pl: 0 }}>
                      <Typography
                        fontWeight="lighter"
                        fontSize={{
                          xs: '0.8rem',
                          sm: '1.1rem',
                        }}
                      >
                        {role}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Stack>

              <Stack>
                <Typography
                  sx={{ fontFamily: oswald }}
                  color="primary"
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize={{
                    xs: '0.8rem',
                    sm: '1.1rem',
                  }}
                >
                  Responsibilities
                </Typography>

                <List sx={{ py: 0 }}>
                  {data.responsibilities.map((responsibility, index) => (
                    <ListItem key={index} sx={{ pl: 0 }}>
                      <Typography
                        fontWeight="lighter"
                        fontSize={{
                          xs: '0.8rem',
                          sm: '1.1rem',
                        }}
                      >
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
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize={{
                    xs: '0.8rem',
                    sm: '1.1rem',
                  }}
                >
                  Technologies
                </Typography>

                <List sx={{ py: 0 }}>
                  {data.technologies.map((technology, index) => (
                    <ListItem key={index} sx={{ pl: 0 }}>
                      <Typography
                        fontWeight="lighter"
                        fontSize={{
                          xs: '0.8rem',
                          sm: '1.1rem',
                        }}
                      >
                        {technology}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Stack>
            </Stack>
          </FadeIn>
        </Grid>
        <Grid item xs={12} md={6}>
          <FadeIn direction="right" delay={0.4}>
            <Box
              height="70vh"
              position="relative"
              sx={{
                overflow: 'hidden',
                borderEndEndRadius: {
                  md: '30%',
                },
                borderStartStartRadius: {
                  md: '30%',
                },
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
        </Grid>
      </Grid>
      {/* <Stack direction="row" width="100%" spacing={10}>
          <Stack flex={1} justifyContent="space-between">
            <Stack>
              <FadeIn direction="left">
                <Typography
                  sx={{ fontFamily: oswald }}
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize={{
                    xs: '1.7rem',
                    sm: '2.8rem',
                    md: '4rem',
                    lg: '5.5rem',
                  }}
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
        </Stack> */}
    </Container>
  );
}
