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
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        navigate(href);
      }}
    >
      {children}
    </a>
  );
}
