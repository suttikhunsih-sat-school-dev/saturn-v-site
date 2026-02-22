'use client';

import { useEffect, useRef, useState } from 'react';
import { firstPageMenus } from '../../lib/constant';

export default function NavigationBar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = (title: string) => {
    setOpenMenu(openMenu === title ? null : title);
  };

  return (
    <nav
      ref={menuRef}
      className="bg-sat-school-primary-yellow text-black mx-auto w-fit rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg md:text-2xl lg:text-3xl py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-12 lg:px-[100px] shadow-lg relative z-20"
    >
      <ul className="flex gap-2 sm:gap-4 md:gap-8 lg:gap-[60px]">
        {Object.entries(firstPageMenus).map(([title, items], index) => {
          return (
            <li key={`${title}-${index}`} className="relative">
              <button
                onClick={() => toggleMenu(title)}
                className="hover:text-sat-school-dark-blue bg-transparent [text-shadow:1_1px_0_#808080] tracking-wider cursor-pointer"
              >
                {title}
              </button>

              {openMenu === title && (
                <ul className="absolute bg-white rounded-lg shadow-lg overflow-hidden text-xs sm:text-sm md:text-base lg:text-xl font-normal left-1/2 -translate-x-1/2 min-w-[180px] sm:min-w-[200px] md:min-w-[240px] top-full mt-2 z-50">
                  {items.map(([link, label], index) => (
                    <li key={`${link}-${index}`}>
                      <a
                        href={link}
                        className="block w-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 hover:bg-gray-100 hover:text-sat-school-dark-blue transition-colors"
                        onClick={() => setOpenMenu(null)}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
