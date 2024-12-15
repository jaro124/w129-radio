import { Link } from "gatsby";
import React, { useState } from "react";
import { toggleTheme } from "../../utils/toggleTheme.js";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-white dark:bg-black shadow-lg">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-4">
        <Link
          className="flex items-center no-underline text-black dark:text-gray-400"
          to="/"
        >
          <svg
            width="36"
            height="36"
            className="fill-white stroke-black dark:fill-black dark:stroke-gray-400"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle r="16" cx="18" cy="18" />
            <rect height="1" width="20" x="8" y="10"/>
            <rect height="1" width="20" x="8" y="22"/>
            <rect height="1" width="1" x="8" y="24"/>
            <rect height="1" width="1" x="27" y="24"/>

            <rect height="1" width="1" x="9" y="14"/>
            <rect height="1" width="1" x="9" y="18"/>
            
            <rect height="1" width="1" x="13" y="14"/>
            <rect height="1" width="1" x="13" y="18"/>
            
            <rect height="1" width="1" x="17" y="14"/>
            <rect height="1" width="1" x="17" y="18"/>
            
            <rect height="1" width="1" x="21" y="14"/>
            <rect height="1" width="1" x="21" y="18"/>
            
            <rect height="1" width="1" x="25" y="14"/>
            <rect height="1" width="1" x="25" y="18"/>

            <rect height="8" transform="matrix(0.7071, -0.7071, 0.7071, 0.7071, 18, 27)" width="1"/>
            <rect height="8" transform="matrix(-0.7071, -0.7071, -0.7071, 0.7071, 18, 27)" width="1"/>
          </svg>
          <span className="font-bold text-xl tracking-tight pl-3">
            Pentoda
          </span>
        </Link>

        <button
          aria-label="Menu"
          className="md:hidden border border-white flex items-center px-3 py-2 rounded text-black dark:text-gray-400"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/`,
              title: `Home`,
            },
            {
              route: `/category`,
              title: `Eksponaty`,
            },
            {
              route: `/about`,
              title: `O nas`,
            },
          ].map((link) => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:mr-6 no-underline font-medium text-black dark:text-gray-400 border-b-2 border-transparent hover:border-orange-400"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}

          <button
            aria-label="Toggle theme"
            className="focus:outline-none mt-4 md:mt-0"
            onClick={toggleTheme}
          >
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24px"
              height="24px"
              viewBox="0 0 405.526 405.526"
              className="fill-current text-black dark:text-gray-400"
            >
              <path
                d="M202.764,0C90.958,0,0,90.958,0,202.763c0,111.809,90.958,202.764,202.763,202.764
		          c111.808,0,202.763-90.955,202.763-202.764C405.526,90.958,314.571,0,202.764,0z M22.952,202.763
		          c0-99.146,80.665-179.811,179.812-179.811v359.623C103.616,382.574,22.952,301.91,22.952,202.763z"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
