import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const SectionAbout = () => {
  return (
    <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-4 bg-white dark:bg-black mb-16 rounded-lg">
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div className="text-left">
        <h2 className="text-2xl font-medium text-black dark:text-gray-400 lg:text-4xl">Pentoda</h2>
            <h3 className="text-xl font-medium text-orange-400 lg:text-2xl">
              radiotechnika z dawnych lat
            </h3>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 md:mt-5 md:max-w-3xl">
          Zapraszamy do zapoznania się z działalnością stowarzyszenia Pentoda, organizacji skupiającej pasjonatów radiofonii i historii techniki.
          </p>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 md:mt-5 md:max-w-3xl">
          Dowiedz się więcej o członkach stowarzyszenia, ich pasji i doświadczeniu. Poznaj historię organizacji i jej działalność na przestrzeni lat.
          </p>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 md:mt-5 md:max-w-3xl">
          Odkryj tajemnice kolekcjonowania radioodbiorników i poznaj ludzi, którzy z pasją pielęgnują tę tradycję!
          </p>
          <div className="mt-5 sm:flex md:mt-8">
            <div className="rounded-md shadow">
              <button className="bg-orange-400 hover:bg-orange-500 text-black font-semibold py-2 px-4 border border-orange-500 hover:border-transparent rounded">
                <Link to="/about">Zapoznaj się z informacjami o stowarzyszeniu</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center py-5 md:w-1/2 md:pb-10 md:pt-4 md:pl-4">
        <div className="relative w-full p-3 rounded  md:p-8">
          <div className="rounded-lg bg-white text-black w-full">
            <StaticImage
              src="../images/logo.jpg"
              alt="Background"
              className="w-96 h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionAbout;
