import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import ApolloProvider from '@/providers/graphql/apollo-provider';
import ThemeProvider from '@/providers/theme/theme-provider';
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
            <ApolloProvider>
              <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
            </ApolloProvider>
          </main>

          <footer></footer>
        </body>
      </ThemeProvider>
    </html>
  );
}
