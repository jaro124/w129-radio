import React from "react";

import { StaticImage } from "gatsby-plugin-image";

const HeroAbout = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        <div className="relative z-10 lg:py-16">
          <div className="relative h-64 sm:h-80 lg:h-full">
            <StaticImage
              alt="Pentoda - radiotechnika z dawnych lat"
              src="../images/logo.jpg"
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
                    Celem organizacji jest gromadzenie, renowacja oraz
                    dokumentowanie zabytkowych radioodbiorników oraz innego
                    sprzętu radiotechnicznego.
                  </p>
                  <p className="mt-6 leading-6 text-gray-500">Nasza organizacja nie tylko chroni i odnawia historyczne odbiorniki radiowe, ale również pielęgnuje dziedzictwo techniczne i kulturowe przekazywane z pokolenia na pokolenie. Dzięki pasji i zaangażowaniu członków rodziny Banachów, nasza kolekcja i działalność mogą służyć edukacji i inspirowaniu przyszłych pokoleń miłośników radia.</p>
                  
                  <p className="mt-6 text-gray-500">E-mail: radio@pentoda.pl</p>
                  <p className="text-gray-500">NIP: 7262703226</p>
                  <p className="text-gray-500">REGON: 527492966</p>


          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
