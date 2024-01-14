import { apolloClient } from '@/lib/graphql/client';
import { getExtras as extras } from '@/app/about/api/graphql/query/extras';
import { ExtrasQuery } from '@/schemas/graphql/generated/graphql';
import { Extra } from '@/app/about/schemas/extras';

export async function getExtras(): Promise<Extra[]> {
  const { data } = await apolloClient.query<ExtrasQuery>({
    query: extras,
  });
  const extrasData = data?.about?.data?.attributes?.extra ?? [];
  return extrasData.map((e) => ({
    title: e!.title,
    text: e!.text,
  }));
}
