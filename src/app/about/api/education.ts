import { apolloClient } from '@/lib/graphql/client';
import { getEducation as education } from '@/app/about/api/graphql/query/education';
import { Education } from '@/app/about/schemas/education';
import { EducationQuery } from '@/schemas/graphql/generated/graphql';

export async function getEducation(): Promise<Education[]> {
  const { data } = await apolloClient.query<EducationQuery>({
    query: education,
  });
  const educationData = data?.about?.data?.attributes?.education ?? [];
  return educationData.map((e) => ({
    title: e!.title,
    institution: e!.institution,
    location: e!.location,
    from: new Date(e!.from),
    to: e!.to ? new Date(e!.to) : undefined,
    iconUrl: e!.icon?.data?.attributes?.url,
  }));
}
