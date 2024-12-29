import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import FadeIn from '@/components/transitions/fade-in';
import { getEducation } from '@/app/about/api/education';
import { shortFormat } from '@/utils/date';

export default async function Experience() {
  const education = await getEducation();
  return (
    <Stack my={15}>
      <FadeIn direction="left">
        <Container maxWidth="xl">
          <Typography
            fontFamily={oswald.style.fontFamily}
            fontWeight="bold"
            fontSize={{
              xs: '1.5rem',
              sm: '2rem',
              md: '2.5rem',
            }}
          >
            Education
          </Typography>
          <Typography
            fontFamily={oswald.style.fontFamily}
            fontWeight="bold"
            textTransform="uppercase"
            color="secondary"
            lineHeight={1.2}
            fontSize={{
              xs: '2rem',
              sm: '3rem',
              md: '3.5rem',
            }}
          >
            Where I studied
          </Typography>
        </Container>
      </FadeIn>

      {education.map((education, index) => (
        <FadeIn key={index} direction="down" delay={index * 0.15}>
          <Stack>
            <Divider
              variant="fullWidth"
              sx={{ bgcolor: 'background.paper', my: 5 }}
            />
            <Container maxWidth="xl">
              <Stack direction="row" alignItems="end">
                <Stack flex={2}>
                  <Typography
                    fontFamily={oswald.style.fontFamily}
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize={{
                      xs: '1rem',
                      sm: '2rem',
                      md: '2.3rem',
                    }}
                  >
                    {education.to ? shortFormat(education.to) : 'Present'}
                  </Typography>
                  <Typography
                    fontFamily={oswald.style.fontFamily}
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize={{
                      xs: '1rem',
                      sm: '2rem',
                      md: '2.3rem',
                    }}
                  >
                    {shortFormat(education.from)}
                  </Typography>
                </Stack>

                <Stack
                  sx={{
                    flex: 0.5,
                    alignItems: 'end',
                    justifyContent: 'center',
                  }}
                  mx={{
                    xs: 2,
                    sm: 4,
                    md: 6,
                  }}
                >
                  {education.iconUrl && (
                    <Avatar
                      sx={{
                        height: {
                          xs: '3rem',
                          sm: '4.5rem',
                          lg: '6.5rem',
                        },
                        width: {
                          xs: '3rem',
                          sm: '4.5rem',
                          lg: '6.5rem',
                        },
                      }}
                      src={education.iconUrl}
                    />
                  )}
                </Stack>

                <Stack flex={4}>
                  <Typography
                    fontWeight="lighter"
                    variant="subtitle1"
                    fontSize={{
                      xs: '0.8rem',
                      sm: '1rem',
                    }}
                  >
                    {education.location}
                  </Typography>
                  <Typography
                    fontFamily={oswald.style.fontFamily}
                    fontWeight="bold"
                    color="primary"
                    fontSize={{
                      xs: '0.9rem',
                      sm: '1.2rem',
                      md: '1.5rem',
                    }}
                  >
                    {education.institution}
                  </Typography>
                  <Typography
                    fontFamily={oswald.style.fontFamily}
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize={{
                      xs: '1rem',
                      sm: '2rem',
                      md: '2.3rem',
                    }}
                  >
                    {education.title}
                  </Typography>
                </Stack>
              </Stack>
            </Container>
          </Stack>
        </FadeIn>
      ))}
    </Stack>
  );
}
