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

export const metadata: Metadata = {
  title: 'Trinh Xuan Tam - Full Stack Software Engineer',
  description: 'Work portfolio of Trinh Xuan Tam',
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
