import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Stack from '@mui/material/Stack';
import FullScreenContainer from '@/components/full-screen-container';

export default function DetailedIntroduction() {
  return (
    <Container maxWidth="xl">
      <FullScreenContainer className="snap-y">
        <Stack spacing={5}>
          <Stack>
            <Typography
              fontFamily={oswald.style.fontFamily}
              variant="h5"
              color="primary"
              fontWeight="bold"
            >
              Extras
            </Typography>
            <Typography
              fontFamily={oswald.style.fontFamily}
              fontWeight="bold"
              variant="h2"
              color="secondary"
              textTransform="uppercase"
            >
              Get to know me better
            </Typography>
          </Stack>
          <Stack direction="row" spacing={10}>
            <Stack flex={1}>
              <Typography
                fontFamily={oswald.style.fontFamily}
                fontWeight="bold"
                variant="h4"
                textTransform="uppercase"
              >
                My Journey: <br /> The Story So Far
              </Typography>

              <Typography
                variant="subtitle1"
                textAlign="justify"
                fontWeight="lighter"
              >
                <p>
                  Hello world! I&apos;m David, or Trinh Xuan Tam if we&apos;re
                  being formal. I live in the Czech Republic, where I work as a
                  Full Stack Software Engineer. My journey in tech started as a
                  childhood curiosity, transforming gadgets and gizmos into
                  innovative solutions. Fast forward to today, and I&apos;m
                  living my dream &mdash; turning complex problems into elegant,
                  user-friendly software.
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
                  let&apos;s chat. I&apos;m here to bring my blend of technical
                  expertise and creative problem-solving to your team.
                  Let&apos;s make something awesome together!
                </p>
              </Typography>
            </Stack>

            <Stack flex={1}>
              <Typography
                fontFamily={oswald.style.fontFamily}
                fontWeight="bold"
                variant="h4"
                textTransform="uppercase"
              >
                From Classroom <br /> to Code Mastery
              </Typography>
              <Typography
                variant="subtitle1"
                textAlign="justify"
                fontWeight="lighter"
              >
                <p>
                  I&apos;ve always been excited about learning new things,
                  especially when it comes to technology. My adventure in tech
                  started at the Czech Technical University in Prague. This
                  university is pretty famous for its tech courses. Here, I
                  didn&apos;t just learn to code; I learned a lot about how to
                  make great software, including smart design and different ways
                  to build software.
                </p>

                <p>
                  At this university, I discovered that being good at tech means
                  more than just knowing how to code. It&apos;s about
                  understanding how to solve problems creatively and make
                  software that works well and is easy to use. I worked hard and
                  ended up graduating with a master&apos;s degree and honors.
                  This was a big achievement for me, and it wasn&apos;t just
                  about learning tech stuff. It was about growing into someone
                  who can handle all sorts of challenges in the tech world.
                </p>
              </Typography>
            </Stack>

            <Stack flex={1}>
              <Typography
                fontFamily={oswald.style.fontFamily}
                fontWeight="bold"
                variant="h4"
                textTransform="uppercase"
              >
                someone who <br /> wears many hats
              </Typography>

              <Typography
                variant="subtitle1"
                textAlign="justify"
                fontWeight="lighter"
              >
                <p>
                  Whenever someone asks which technology I specialize in, my
                  answer is simple: whatever is needed. Right from the beginning
                  of my career, I&apos;ve embraced a variety of roles and
                  challenges. Whether it&apos;s been in the structured
                  environment of corporates, the dynamic world of startups, or
                  the independent realm of freelancing &ndash; I&apos;ve
                  experienced them all.
                </p>

                <p>
                  My journey in tech has seen me dabbling in everything from
                  frontend to backend development, managing infrastructure or
                  even leading projects. This diversity isn&apos;t just about
                  the roles I&apos;ve played; it extends to the domains
                  I&apos;ve explored. From building sleek e-commerce platforms,
                  contributing to educational technology, designing safety
                  features for trains to delving into the complexities of AI
                  &ndash; each experience has been a new adventure, a new
                  learning opportunity.
                </p>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </FullScreenContainer>
    </Container>
  );
}
