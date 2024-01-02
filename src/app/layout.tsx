import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import ThemeProvider from '@/providers/theme/theme-provider';
import AppContainer from '@/components/app-container';
import AppBar from '@/components/app-bar';
import '@/styles/globals.css';

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
          <header>
            <AppBar />
          </header>

          <main>
            <AppRouterCacheProvider>
              <AppContainer>{children}</AppContainer>
            </AppRouterCacheProvider>
          </main>

          <footer></footer>
        </body>
      </ThemeProvider>
    </html>
  );
}
