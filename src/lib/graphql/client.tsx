import { HttpLink, ApolloLink } from '@apollo/client';
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';

export function createClient() {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_CMS_URL}/graphql`,
    fetchOptions: {
      next: { revalidate: 600 },
    },
  });
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

export const apolloClient = createClient();
