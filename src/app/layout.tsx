import '@/config/firebase';
import '@/styles/css/globals.css';
import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import ApolloProvider from '@/providers/graphql/apollo-provider';
import ThemeProvider from '@/providers/theme/theme-provider';
import DottedBox from '@/components/boxes/dotted-box';
import PageFooter from '@/components/page-footer';
import AppBar from '@/components/app-bar';
import Cursor from '@/components/cursor';
import ScrollIndicator from '@/components/scroll-indicator';
import AnimatedNavigation from '@/components/transitions/animated-navigation';
import AnimatedMenu from '@/components/animated-menu/animated-menu';
import ThemeToggleIconButton from '@/components/buttons/toggle-theme-icon-button';
import Box from '@mui/material/Box';

export const metadata: Metadata = {
  title:
    'Trinh Xuan Tam | Full-Stack Software Engineer | IT solutions and consulting',
  description:
    "Trinh Xuan Tam, an experienced and passionate full-stack software engineer based in Prague, Czech Republic. Specializing in developing innovative software solutions, I have a proven track record of building high-quality applications across various platforms. With a strong focus on user experience and efficient functionality, I am dedicated to creating software that not only meets but exceeds client expectations. Whether it's web development, mobile app creation, or system integration, I bring a dynamic and creative approach to every project.'",
  keywords: [
    'Trinh Xuan Tam',
    'David Trinh',
    'Full-Stack Developer',
    'Software Engineer',
    'Web Development',
    'Mobile App Development',
    'Programming',
    'Technology Solutions',
    'Frontend Development',
    'Backend Development',
    'Trinh Xuan Tam Amazon',
    'David Trinh Amazon',
    'Amazon Software Engineer',
    'Prague Software Engineer',
    'Czech Republic Software Engineer',
    'Software Engineer in Prague',
    'Software Engineer in Czech Republic',
    'Software Engineer in Europe',
    'Software Engineer in EU',
    'Software Engineer in Czechia',
    'Software Engineer in Czech',
    'Software Engineer in Paris',
    'Software Engineer in France',
    'Software Engineer in Brussels',
    'Software Engineer in Belgium',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          <AnimatedNavigation>
            <header>
              <AppBar />
              <Box
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <AnimatedMenu />
                <ThemeToggleIconButton
                  sx={{
                    mx: 2,
                    position: 'fixed',
                    top: '0.75rem',
                    right: '4rem',
                    zIndex: 9999,
                  }}
                />
              </Box>
            </header>

            <main style={{ minHeight: '100vh' }}>
              <ApolloProvider>
                <AppRouterCacheProvider>
                  <DottedBox>{children}</DottedBox>
                </AppRouterCacheProvider>
              </ApolloProvider>
            </main>

            <footer>
              <PageFooter />
            </footer>
          </AnimatedNavigation>
          <ScrollIndicator />
          <Cursor />
        </body>
      </ThemeProvider>
    </html>
  );
}
