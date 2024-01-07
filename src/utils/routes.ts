enum Routes {
  Home = '/',
  About = '/about',
  Resume = '/resume',
  Projects = '/projects',
  Blog = '/blog',
  Contact = '/contact',
}

export function getRouteObjects(): { name: string; path: string }[] {
  return Object.keys(Routes).map((key) => ({
    name: key,
    path: Routes[key as keyof typeof Routes],
  }));
}

export default Routes;
