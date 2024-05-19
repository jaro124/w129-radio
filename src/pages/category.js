import React from "react";
import { Link } from "gatsby";
import Layout from "../components/core/layout";
import Seo from "../components/core/seo";
import { StaticImage } from "gatsby-plugin-image";

const CategoryList = () => {
  return (
    <Layout>
      <div className="px-4">
        <div className="max-w-4xl bg-white dark:bg-black rounded-lg mx-auto my-8 p-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 uppercase underline decoration-orange-400 lg:text-3xl dark:text-white">
              Kategorie eksponatów
            </h1>
            <p className="max-w-lg mx-auto mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <Link to={"/radia"}>
            <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-600 dark:hover:bg-slate-700 md:max-w-full mb-8">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <StaticImage
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    alt="Kategoria radia"
                    src="../images/category-radia.jpg"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200">
                    Radia
                  </h2>
                  <h3 className="text-indigo-700 dark:text-indigo-300 font-semibold">
                    radia
                  </h3>
                  <p className="font-sans text-sm mt-2 text-slate-500 dark:text-slate-300">
                    Lorem ipsum
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link to={"/czasopisma"}>
            <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-600 dark:hover:bg-slate-700 md:max-w-full mb-8">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <StaticImage
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    alt="Kategoria czasopisma"
                    src="../images/category-czasopisma.jpg"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200">
                    Czasopisma
                  </h2>
                  <h3 className="text-indigo-700 dark:text-indigo-300 font-semibold">
                    czasopisma radiowe
                  </h3>
                  <p className="font-sans text-sm mt-2 text-slate-500 dark:text-slate-300">
                    Lorem ipsum
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link to={"/lampy"}>
            <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-600 dark:hover:bg-slate-700 md:max-w-full mb-8">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <StaticImage
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    alt="Kategoria lampy"
                    src="../images/category-lampy.jpg"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200">
                    lampy
                  </h2>
                  <h3 className="text-indigo-700 dark:text-indigo-300 font-semibold">
                    lampy radiowe
                  </h3>
                  <p className="font-sans text-sm mt-2 text-slate-500 dark:text-slate-300">
                    Lorem ipsum
                  </p>
                </div>
              </div>
            </div>
          </Link>          

        </div>
      </div>
    </Layout>
  );
};

export default CategoryList;

export const Head = () => (
  <Seo
    title="List posts page"
    description="List posts page"
    keywords={["Blog", "Post"]}
  />
);
