import { apolloClient } from '@/lib/graphql/client';
import {
  ProjectOverview,
  ProjectDetail,
} from '@/app/projects/schemas/projects';
import { projectsOverview } from '@/app/projects/api/graphql/query/projects';
import {
  ProjectDetailQuery,
  ProjectDetailQueryVariables,
  ProjectsOverviewQuery,
} from '@/schemas/graphql/generated/graphql';
import { projectDetail } from '@/app/projects/api/graphql/query/project-detail';

export async function getProjectsOverview(): Promise<ProjectOverview[]> {
  const { data } = await apolloClient.query<ProjectsOverviewQuery>({
    query: projectsOverview,
  });
  const projects = data?.projects!.data.map((project) => ({
    id: project.id!,
    name: project.attributes!.name,
    briefDescription: project.attributes!.briefDescription,
    thumbnailUrl: `${process.env.NEXT_PUBLIC_CMS_URL}${
      project.attributes!.thumbnail?.data?.attributes?.url
    }`,
  }));
  return projects;
}

export async function getProjectDetail(id: string): Promise<ProjectDetail> {
  const { data } = await apolloClient.query<
    ProjectDetailQuery,
    ProjectDetailQueryVariables
  >({
    query: projectDetail,
    variables: {
      id,
    },
  });

  const projectData = data!.project!.data!.attributes!;

  return {
    id: id,
    name: projectData.name,
    description: projectData.description,
    briefDescription: projectData.briefDescription,
    roles: projectData.roles.map((role) => role!.name),
    responsibilities: projectData.responsibilities.map(
      (responsibility) => responsibility!.name
    ),
    technologies: projectData.technologies.map(
      (technology) => technology!.name
    ),
    thumbnailUrl: `${process.env.NEXT_PUBLIC_CMS_URL}${projectData.thumbnail.data?.attributes?.url}`,
    imageUrls: projectData.images.data.map(
      (image) => `${process.env.NEXT_PUBLIC_CMS_URL}${image!.attributes?.url}`
    ),
  };
}
