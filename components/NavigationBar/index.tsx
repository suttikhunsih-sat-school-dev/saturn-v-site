const menus = {
  "เกี่ยวกับ Saturn V": [
    ["/about", "Saturn V คืออะไร"],
    ["/theme", "Theme Saturn V"],
  ],
  "โครงการของ SATURN V": [
    ["/project", "Saturn V Project"],
  ],
  "สนใจทำโครงการ": [
    ["/format", "รูปแบบการจัดโครงการ"],
    ["/target", "ระยะเวลาการจัดโครงการและกลุ่มเป้าหมายในการจัดโครงการ"],
    ["/pr", "Public Relations Saturn V"],
    ["/report", "การรายงานผลหลังจบโครงการ (Report)"],
  ],
};

export default function NavigationBar() {
  return (
    <nav className="bg-sat-school-primary-yellow text-black mx-auto w-fit rounded-xl font-bold text-3xl py-4 px-[100px] shadow-lg -mt-3 relative z-20">
      <ul className="flex gap-[60px]">
        {Object.entries(menus).map(([title, items]) => (
          <li key={title} className="relative group">
            <button className="hover:text-sat-school-dark-blue bg-transparent">
              {title}
            </button>

            <ul className="absolute hidden group-hover:block hover:block bg-white rounded-lg shadow-lg overflow-hidden text-xl font-normal left-1/2 -translate-x-1/2 min-w-[220px]">
              {items.map(([link, label]) => (
                <li key={link}>
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
        ))}
      </ul>
    </nav>
  );
}