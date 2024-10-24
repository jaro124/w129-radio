// src/components/section-hero1.js
import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const SectionHero = () => {
  return (
    <div className="relative w-full h-screen">
      <StaticImage
        src="../images/site-image.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.5)" }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl font-bold text-white mb-8">
          Pentoda - radiotechnika z dawnych lat
        </h1>
        <h2 className="text-2xl text-white">
          Zapraszamy na niezwykłą podróż w przeszłość do świata starych
          radioodbiorników.
        </h2>
        <h2 className="text-2xl text-white mb-12">
          Zobacz, jak ewoluowała technika i design przez dekady.
        </h2>
        <button className="bg-orange-400 hover:bg-orange-500 text-black font-semibold py-2 px-4 border border-orange-500 hover:border-transparent rounded">
          <Link to="/category">Zobacz nasze eksponaty</Link>
        </button>
      </div>
    </div>
  );
};

export default SectionHero;
