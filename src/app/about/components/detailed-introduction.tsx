import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import Stack from '@mui/material/Stack';
import FullScreenContainer from '@/components/full-screen-container';
import FadeIn from '@/components/transitions/fade-in';

type Story = {
  title: string;
  description: string;
};

const stories: Story[] = [
  {
    title: 'My journey:\nThe story so far',
    description:
      "Hello world! I'm David, or Trinh Xuan Tam if we're being formal. I live in the Czech Republic, where I work as a Full Stack Software Engineer. My journey in tech started as a childhood curiosity, transforming gadgets and gizmos into innovative solutions. Fast forward to today, and I'm living my dream &mdash; turning complex problems into elegant, user-friendly software.\n\nBut it's not just about coding for me. It's about understanding the 'why' behind each project, ensuring that every line of code I write not only works flawlessly but also adds real value. I thrive on challenges, love collaborating with diverse teams, and am always on the lookout for the next big thing in tech.\n\nSo, if you need someone who's as passionate about delivering quality as they are about the latest tech trends, let's chat. I'm here to bring my blend of technical expertise and creative problem-solving to your team. Let's make something awesome together!",
  },
  {
    title: 'From classroom\nto code mastery',
    description:
      "I've always been excited about learning new things, especially when it comes to technology. My adventure in tech started at the Czech Technical University in Prague. This university is pretty famous for its tech courses. Here, I didn't just learn to code; I learned a lot about how to make great software, including smart design and different ways to build software.\n\nAt this university, I discovered that being good at tech means more than just knowing how to code. It's about understanding how to solve problems creatively and make software that works well and is easy to use. I worked hard and ended up graduating with a master's degree and honors. This was a big achievement for me, and it wasn't just about learning tech stuff. It was about growing into someone who can handle all sorts of challenges in the tech world.",
  },
  {
    title: 'Someone who\nwears many hats',
    description:
      "Whenever someone asks which technology I specialize in, my answer is simple: whatever is needed. Right from the beginning of my career, I've embraced a variety of roles and challenges. Whether it's been in the structured environment of corporates, the dynamic world of startups, or the independent realm of freelancing &ndash; I've experienced them all.\n\nMy journey in tech has seen me dabbling in everything from frontend to backend development, managing infrastructure or even leading projects. This diversity isn't just about the roles I've played; it extends to the domains I've explored. From building sleek e-commerce platforms, contributing to educational technology, designing safety features for trains to delving into the complexities of AI &ndash; each experience has been a new adventure, a new learning opportunity.",
  },
];

export default function DetailedIntroduction() {
  return (
    <Container maxWidth="xl">
      <FullScreenContainer className="snap-y">
        <Stack spacing={5}>
          <FadeIn direction="left">
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
          </FadeIn>

          <Stack direction="row" spacing={10}>
            {stories.map((story, index) => (
              <Stack key={index} flex={1}>
                <FadeIn direction="down" delay={index * 0.15}>
                  <Typography
                    fontFamily={oswald.style.fontFamily}
                    fontWeight="bold"
                    variant="h4"
                    textTransform="uppercase"
                    whiteSpace="pre-line"
                    mb={2}
                  >
                    {story.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    textAlign="justify"
                    fontWeight="lighter"
                    whiteSpace="pre-line"
                  >
                    {story.description}
                  </Typography>
                </FadeIn>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </FullScreenContainer>
    </Container>
  );
}
