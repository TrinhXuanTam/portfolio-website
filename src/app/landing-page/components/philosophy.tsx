import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import FlareOutlinedIcon from '@mui/icons-material/FlareOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import ScrollIn from '@/components/transitions/scroll-in';
import FadeIn from '@/components/transitions/fade-in';
import Box from '@mui/material/Box';

type Value = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const values: Value[] = [
  {
    icon: <BrushOutlinedIcon fontSize="large" />,
    title: 'Creativity',
    description:
      'I am a creative problem solver, always looking for new ways to innovate and improve.',
  },
  {
    icon: <FlareOutlinedIcon fontSize="large" />,
    title: 'Quality',
    description:
      'I am committed to delivering the highest quality of work, ensuring that your project is completed to the highest standards.',
  },
  {
    icon: <GppGoodOutlinedIcon fontSize="large" />,
    title: 'Reliability',
    description:
      'I am a reliable partner that you can count on to deliver your project on time and on budget.',
  },
  {
    icon: <SearchOutlinedIcon fontSize="large" />,
    title: 'Transparency',
    description:
      'I believe in open communication and transparency, keeping you informed throughout the entire process.',
  },
  {
    icon: <FavoriteBorderOutlinedIcon fontSize="large" />,
    title: 'Passion',
    description:
      'I am passionate about what I do and I will go above and beyond to help you achieve your goals.',
  },
  {
    icon: <HandshakeOutlinedIcon fontSize="large" />,
    title: 'Integrity',
    description:
      'I am a person of integrity, committed to doing the right thing and building long-term relationships with my clients.',
  },
];

export default function Philosophy() {
  return (
    <Stack width="100%">
      <Container maxWidth="lg">
        <FadeIn delay={1}>
          <Typography
            fontFamily={oswald.style.fontFamily}
            variant="h6"
            color="primary"
            textTransform="uppercase"
            fontSize={{
              xs: '1rem',
              sm: '1.3rem',
              md: '1.5em',
            }}
          >
            My values
          </Typography>
        </FadeIn>
        <Stack direction="row" justifyContent="space-between" alignItems="end">
          <ScrollIn>
            <FadeIn direction="up">
              <Typography
                fontFamily={oswald.style.fontFamily}
                fontWeight="bold"
                textTransform="uppercase"
                fontSize={{
                  xs: '2rem',
                  sm: '4rem',
                  md: '5rem',
                }}
              >
                Why <br /> should <br /> you consider
              </Typography>
            </FadeIn>
          </ScrollIn>

          <ScrollIn direction="up">
            <FadeIn direction="down">
              <Typography
                fontFamily={oswald.style.fontFamily}
                fontWeight="bold"
                textTransform="uppercase"
                textAlign="right"
                fontSize={{
                  xs: '2rem',
                  sm: '4rem',
                  md: '5rem',
                }}
              >
                working <br /> with <br /> me
              </Typography>
            </FadeIn>
          </ScrollIn>
        </Stack>
      </Container>

      <Container maxWidth="lg">
        <Stack
          mt={{
            xs: 0,
            sm: 10,
          }}
          mb="30vh"
        >
          {values.map((value, index) => (
            <Stack key={index}>
              <Divider
                variant="fullWidth"
                sx={{ borderColor: 'background.paper', my: 5 }}
              />
              <Stack
                direction={index % 2 === 0 ? 'row' : 'row-reverse'}
                justifyContent="space-between"
                alignItems="center"
              >
                <FadeIn delay={index * 0.15} once={true}>
                  <Stack
                    direction={index % 2 === 0 ? 'row' : 'row-reverse'}
                    alignItems="center"
                    spacing={2}
                  >
                    {value.icon}
                    <Typography
                      fontFamily={oswald.style.fontFamily}
                      variant="h3"
                      fontWeight="bold"
                      textAlign={index % 2 === 0 ? 'left' : 'right'}
                      color="secondary"
                      textTransform="uppercase"
                      fontSize={{
                        xs: '1.5rem',
                        sm: '2rem',
                        md: '2.5rem',
                      }}
                    >
                      {value.title}
                    </Typography>
                  </Stack>
                </FadeIn>

                <Box maxWidth="40%">
                  <FadeIn
                    delay={values.length * 0.15 + index * 0.15}
                    once={true}
                  >
                    <Typography
                      textAlign={{
                        xs: 'left',
                        sm: 'justify',
                      }}
                      fontWeight="lighter"
                      fontSize={{
                        xs: '0.7rem',
                        sm: '1rem',
                      }}
                    >
                      {value.description}
                    </Typography>
                  </FadeIn>
                </Box>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Stack>
  );
}
