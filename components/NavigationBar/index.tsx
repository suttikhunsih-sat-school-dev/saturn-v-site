const NavigationBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 z-10">
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="/projects" className="hover:text-gray-400">
            Projects
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
