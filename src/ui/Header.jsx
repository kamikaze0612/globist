import { NavLink, Link } from "react-router-dom";

import Icon from "../components/Icon";
import { useState } from "react";
import Search from "../components/Search";

function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <header className="relative flex h-16 items-center justify-between px-4 py-6 shadow-sm dark:bg-primary-blue sm:h-20 sm:px-6 lg:px-10">
      <div>
        <span className="font-bold dark:text-stone-100 sm:text-lg">
          <Link className="uppercase" to="/">
            🌍 Globist
          </Link>
        </span>
      </div>
      <Search />
      <button
        className="z-50 sm:hidden"
        onClick={() => setShowMobileNav((cur) => !cur)}
      >
        <Icon iconName="icon-menu" size="bg" />
      </button>
      <nav
        className={`absolute right-0 top-0 z-40 bg-white shadow-[-1px_0_2px_rgba(0,0,0,0.05)] transition-transform duration-500 sm:relative sm:translate-y-0 sm:bg-transparent sm:opacity-100 sm:shadow-none ${
          showMobileNav
            ? " translate-y-0 opacity-100"
            : " -translate-y-full opacity-0"
        }`}
      >
        <ul className="flex h-screen flex-col gap-1 pt-16 sm:h-auto sm:flex-row sm:gap-6 sm:pt-0">
          <li>
            <NavLink
              to="/countries"
              className=" block w-full border-b  border-gray-300 px-5 py-2 text-xs font-semibold text-stone-600 no-underline dark:text-stone-100 sm:inline-block sm:border-0 sm:px-0 sm:py-0 sm:text-sm"
            >
              Countries
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
