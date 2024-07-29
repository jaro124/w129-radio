import React from "react";
import { Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";

const HeroHome = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        <div className="relative z-10 lg:py-16">
          <div className="relative h-64 sm:h-80 lg:h-full">
            <StaticImage
              alt="Pentoda - radiotechnika z dawnych lat"
              src="../images/pentoda-home.jpg"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="relative flex items-center bg-gray-100 dark:bg-slate-800">
          <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100 dark:bg-slate-800"></span>

          <div className="p-8 sm:p-16 lg:p-24">
            <h1 className="text-6xl text-gray-700 dark:text-gray-400 font-bold">Pentoda</h1>
            <h2 className="text-2xl font-bold text-orange-400">
              radiotechnika z dawnych lat
            </h2>

            <p className="mt-6 leading-6 text-gray-500">
              Jesteśmy stowarzyszeniem z siedzibą w Łodzi. Nasza organizacja
              stawia sobie za cel nie tylko gromadzenie i renowację zabytkowych
              radioodbiorników oraz innego sprzętu radiotechnicznego, ale także
              dokumentowanie ich historii oraz popularyzację wiedzy na temat
              technologii radiowej z ubiegłych dekad.
            </p>

            <div className="mt-8">
            <button className="bg-orange-400 hover:bg-orange-500 text-black font-semibold py-2 px-4 border border-orange-500 hover:border-transparent rounded">
              <Link to="/about">Więcej o nas</Link>
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
