'use client';

import { useAnimatedNavigation } from '@/components/transitions/animated-navigation';
import { usePathname } from 'next/navigation';

export default function AnimatedNavigationLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const { navigate } = useAnimatedNavigation();
  const pathName = usePathname();

  function handleNavigation(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if (href === pathName) return;
    navigate(href);
  }

  return (
    <a href={href} onClick={handleNavigation}>
      {children}
    </a>
  );
}
