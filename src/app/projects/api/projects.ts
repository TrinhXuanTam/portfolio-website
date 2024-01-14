import { apolloClient } from '@/lib/graphql/client';
import { ProjectOverview } from '@/app/projects/schemas/projects';
import { projectsOverview } from '@/app/projects/api/graphql/query/projects';
import { ProjectsOverviewQuery } from '@/schemas/graphql/generated/graphql';

export async function getProjectsOverview(): Promise<ProjectOverview[]> {
  const { data } = await apolloClient.query<ProjectsOverviewQuery>({
    query: projectsOverview,
  });
  return data?.projects!.data.map((project) => ({
    id: project.id!,
    name: project.attributes!.Name,
    thumbnailUrl: `${process.env.NEXT_PUBLIC_CRM_URL}${
      project.attributes!.Thumbnail?.data?.attributes?.url
    }`,
  }));
}
