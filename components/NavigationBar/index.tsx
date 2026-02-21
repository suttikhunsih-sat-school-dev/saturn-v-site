import { firstPageMenus } from '../../lib/constant';

export default function NavigationBar() {
  return (
    <nav className="bg-sat-school-primary-yellow text-black mx-auto w-fit rounded-xl font-bold text-3xl py-4 px-[100px] shadow-lg -mt-6 relative z-20">
      <ul className="flex gap-[60px]">
        {Object.entries(firstPageMenus).map(([title, items], index) => {
          return (
            <li key={`${title}-${index}`} className="relative group">
              <button className="hover:text-sat-school-dark-blue bg-transparent [text-shadow:1_1px_0_#808080] tracking-wider">
                {title}
              </button>

              <ul className="absolute hidden group-hover:block hover:block bg-white rounded-lg shadow-lg overflow-hidden text-xl font-normal left-1/2 -translate-x-1/2 min-w-[220px]">
                {items.map(([link, label], index) => (
                  <li key={`${link}-${index}`}>
                    <a
                      href={link}
                      className="block w-full px-6 py-3 hover:bg-gray-100 hover:text-sat-school-dark-blue"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
