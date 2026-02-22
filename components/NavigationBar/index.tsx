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
      className="bg-sat-school-primary-yellow text-black mx-auto w-fit rounded-xl font-bold text-3xl py-4 px-[100px] shadow-lg -mt-6 relative z-20"
    >
      <ul className="flex gap-[60px]">
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
                <ul className="absolute bg-white rounded-lg shadow-lg overflow-hidden text-xl font-normal left-1/2 -translate-x-1/2 min-w-[220px] top-full mt-2">
                  {items.map(([link, label], index) => (
                    <li key={`${link}-${index}`}>
                      <a
                        href={link}
                        className="block w-full px-6 py-3 hover:bg-gray-100 hover:text-sat-school-dark-blue transition-colors"
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
