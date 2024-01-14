import { apolloClient } from '@/lib/graphql/client';
import { ProjectOverview } from '@/app/projects/schemas/projects';
import { projectsOverview } from '@/app/projects/api/graphql/query/projects';
import { ProjectsOverviewQuery } from '@/schemas/graphql/generated/graphql';

export async function getProjectsOverview(): Promise<ProjectOverview[]> {
  const { data } = await apolloClient.query<ProjectsOverviewQuery>({
    query: projectsOverview,
  });
  const projects = data?.projects!.data.map((project) => ({
    id: project.id!,
    name: project.attributes!.name,
    thumbnailUrl: `${process.env.NEXT_PUBLIC_CRM_URL}${
      project.attributes!.thumbnail?.data?.attributes?.url
    }`,
  }));

  const res = [];
  for (let i = 0; i < 10; i += 1) {
    res.push(...projects);
  }
  return res;
}
