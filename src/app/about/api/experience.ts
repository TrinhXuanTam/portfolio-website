import { apolloClient } from '@/lib/graphql/client';
import { getWorkExperience as workExperience } from '@/app/about/api/graphql/query/experience';
import { WorkExperiencesQuery } from '@/schemas/graphql/generated/graphql';
import { WorkExperience } from '@/app/about/schemas/experience';

export async function getWorkExperience(): Promise<WorkExperience[]> {
  const { data } = await apolloClient.query<WorkExperiencesQuery>({
    query: workExperience,
  });
  const experience = data?.about?.data?.attributes?.workExperience ?? [];
  return experience.map((e) => ({
    title: e!.title,
    company: e!.company,
    location: e!.location,
    from: new Date(e!.from),
    to: e!.to ? new Date(e!.to) : undefined,
  }));
}
