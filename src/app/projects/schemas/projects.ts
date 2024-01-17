export interface ProjectOverview {
  id: string;
  name: string;
  thumbnailUrl: string;
  briefDescription: string;
}

export interface ProjectDetail {
  id: string;
  name: string;
  description: string;
  briefDescription: string;
  roles: string[];
  responsibilities: string[];
  technologies: string[];
  thumbnailUrl: string;
  imageUrls: string[];
}
