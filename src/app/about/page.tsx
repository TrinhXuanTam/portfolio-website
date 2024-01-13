import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Stack from '@mui/material/Stack';
import FadeIn from '@/components/transitions/fade-in';
import mountains from '@/assets/images/mountains.png';
import ParalaxImage from '@/app/about/components/paralax-image';
import VerticalScrollTransition from '@/components/transitions/vertical-scroll-transition';
import FullScreenContainer from '@/components/full-screen-container';
import Laptop from '@/components/laptop';

export default function About() {
  return (
    <Stack pb={30}>
      <FullScreenContainer className="snap-y">
        <Container maxWidth="xl">
          <VerticalScrollTransition>
            <Stack justifyContent="center" mb={3}>
              <FadeIn direction="down" once={true}>
                <Typography
                  fontFamily={oswald.style.fontFamily}
                  fontWeight="medium"
                  variant="h4"
                  color="primary"
                >
                  Hi there, nice to meet you !
                </Typography>
              </FadeIn>

              <FadeIn direction="down" delay={0.2} once={true}>
                <Typography
                  fontFamily={oswald.style.fontFamily}
                  fontWeight="bold"
                  variant="h3"
                >
                  I&apos;m known among friends and colleagues as David
                </Typography>
              </FadeIn>
            </Stack>
          </VerticalScrollTransition>

          <FadeIn direction="down" delay={0.4} once={true}>
            <ParalaxImage src={mountains.src} alt="Me in the mountains" />
          </FadeIn>
        </Container>
      </FullScreenContainer>

      <Container maxWidth="lg">
        <Stack>
          <FullScreenContainer className="snap-y">
            <Stack justifyContent="space-between" direction="row" spacing={10}>
              <Stack flex={1} spacing={2}>
                <Typography
                  fontFamily={oswald.style.fontFamily}
                  fontWeight="bold"
                  variant="h3"
                  textTransform="uppercase"
                >
                  <FadeIn direction="left">
                    My Journey: <br /> The Story So Far
                  </FadeIn>
                </Typography>

                <Laptop sx={{ flex: 1 }} />
              </Stack>

              <Typography flex={1} variant="subtitle1" textAlign="justify">
                <FadeIn direction="right">
                  <p>
                    Hello world! I&apos;m David, or Trinh Xuan Tam if we&apos;re
                    being formal. I live in the Czech Republic, where I work as
                    a Full Stack Software Engineer. My journey in tech started
                    as a childhood curiosity, transforming gadgets and gizmos
                    into innovative solutions. Fast forward to today, and
                    I&apos;m living my dream &mdash; turning complex problems
                    into elegant, user-friendly software.
                  </p>
                  <p>
                    But it&apos;s not just about coding for me. It&apos;s about
                    understanding the &apos;why&apos; behind each project,
                    ensuring that every line of code I write not only works
                    flawlessly but also adds real value. I thrive on challenges,
                    love collaborating with diverse teams, and am always on the
                    lookout for the next big thing in tech.
                  </p>
                  <p>
                    So, if you need someone who&apos;s as passionate about
                    delivering quality as they are about the latest tech trends,
                    let&apos;s chat. I&apos;m here to bring my blend of
                    technical expertise and creative problem-solving to your
                    team. Let&apos;s make something awesome together!
                  </p>
                </FadeIn>
              </Typography>
            </Stack>
          </FullScreenContainer>
          <FullScreenContainer className="snap-y">
            <Stack justifyContent="space-between" direction="row" spacing={10}>
              <Typography flex={1} variant="subtitle1" textAlign="justify">
                <FadeIn direction="left">
                  <p>
                    I&apos;ve always been excited about learning new things,
                    especially when it comes to technology. My adventure in tech
                    started at the Czech Technical University in Prague. This
                    university is pretty famous for its tech courses. Here, I
                    didn&apos;t just learn to code; I learned a lot about how to
                    make great software, including smart design and different
                    ways to build software.
                  </p>

                  <p>
                    At this university, I discovered that being good at tech
                    means more than just knowing how to code. It&apos;s about
                    understanding how to solve problems creatively and make
                    software that works well and is easy to use. I worked hard
                    and ended up graduating with a master&apos;s degree and
                    honors. This was a big achievement for me, and it
                    wasn&apos;t just about learning tech stuff. It was about
                    growing into someone who can handle all sorts of challenges
                    in the tech world.
                  </p>
                </FadeIn>
              </Typography>
              <Typography
                flex={1}
                fontFamily={oswald.style.fontFamily}
                fontWeight="bold"
                variant="h3"
                textTransform="uppercase"
              >
                From Classroom <br /> to Code Mastery
              </Typography>
            </Stack>
          </FullScreenContainer>

          <FullScreenContainer className="snap-y">
            <Stack justifyContent="space-between" direction="row" spacing={10}>
              <Typography
                flex={1}
                fontFamily={oswald.style.fontFamily}
                fontWeight="bold"
                variant="h3"
                textTransform="uppercase"
              >
                <FadeIn direction="left">
                  someone who <br /> wears many hats
                </FadeIn>
              </Typography>

              <Typography flex={1} variant="subtitle1" textAlign="justify">
                <FadeIn direction="right">
                  <p>
                    Whenever someone asks which technology I specialize in, my
                    answer is simple: whatever is needed. Right from the
                    beginning of my career, I&apos;ve embraced a variety of
                    roles and challenges. Whether it&apos;s been in the
                    structured environment of corporates, the dynamic world of
                    startups, or the independent realm of freelancing &ndash;
                    I&apos;ve experienced them all.
                  </p>

                  <p>
                    My journey in tech has seen me dabbling in everything from
                    frontend to backend development, managing infrastructure or
                    even leading projects. This diversity isn&apos;t just about
                    the roles I&apos;ve played; it extends to the domains
                    I&apos;ve explored. From building sleek e-commerce
                    platforms, contributing to educational technology, designing
                    safety features for trains to delving into the complexities
                    of AI &ndash; each experience has been a new adventure, a
                    new learning opportunity.
                  </p>

                  <p>
                    What excites me most is not just the variety of work I do,
                    but the chance to continually dive into new domains and
                    roles. For me, technology is an ever-evolving landscape, and
                    wearing many hats isn&apos;t just a necessity; it&apos;s a
                    passion. It&apos;s about being ready to adapt, learn, and
                    grow in whatever direction the tech world moves.
                  </p>
                </FadeIn>
              </Typography>
            </Stack>
          </FullScreenContainer>
        </Stack>
      </Container>
    </Stack>
  );
}
