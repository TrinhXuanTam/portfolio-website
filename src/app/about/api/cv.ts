import { apolloClient } from '@/lib/graphql/client';
import { getCvFile } from '@/app/about/api/graphql/query/cv';
import { CvFileQuery } from '@/schemas/graphql/generated/graphql';

export async function getCvUrl(): Promise<string> {
  const { data } = await apolloClient.query<CvFileQuery>({ query: getCvFile });
  return data!.about!.data!.attributes!.cv!.data!.attributes!.url;
}
