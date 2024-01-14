'use client';

import { useAnimatedNavigation } from '@/components/transitions/animated-navigation';

export default function AnimatedNavigationLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const { navigate } = useAnimatedNavigation();

  function handleNavigation(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    navigate(href);
  }

  return (
    <a href={href} onClick={handleNavigation}>
      {children}
    </a>
  );
}
