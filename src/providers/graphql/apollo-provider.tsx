'use client';

import { createClient } from '@/lib/graphql/client';
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr';

export default function ApolloProvider({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={createClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
