'use client';

import { usePathname } from 'next/navigation';
import FloatingMenuProvider from '../FloatingMenuProvider';

export default function FloatingMenuWrapper() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  if (isHome) {
    return null;
  }

  return <FloatingMenuProvider />;
}
