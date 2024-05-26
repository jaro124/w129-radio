import React from "react";
import { Link } from "gatsby";
import Layout from "../components/core/layout";
import Seo from "../components/core/seo";
import { StaticImage } from "gatsby-plugin-image";

const userConfig = require("../../config.js");

const CategoryList = () => {
  const czasopismaImage = "../images/category-czasopisma.jpg"
  const lampyImage = "../images/category-lampy.jpg"
  const radiaImage = "../images/category-radia.jpg"
  return (
    <Layout>
      <div className="px-4">
        <div className="max-w-4xl bg-white dark:bg-black rounded-lg mx-auto my-8 p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-800 uppercase underline decoration-orange-400 lg:text-3xl dark:text-white">
              Kategorie eksponatów
            </h1>
          </div>

          <Link to={"/" + userConfig.categories[0].name}>
            <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-600 dark:hover:bg-slate-700 md:max-w-full mb-8">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <StaticImage
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    alt={userConfig.categories[0].subTitle}
                    src={czasopismaImage}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200">
                    {userConfig.categories[0].title}
                  </h2>
                  <h3 className="text-orange-500 font-semibold">
                  {userConfig.categories[0].subTitle}
                  </h3>
                  <p className="font-sans text-sm mt-2 text-slate-500 dark:text-slate-300">
                  {userConfig.categories[0].description}
                  </p>
                  <div className="bg-transparent pt-2 mr-2 flex justify-end justify-items-end flex-wrap">
                    <div className="ml-2">
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-black bg-orange-400 rounded-full">
                        66
                      </span>
                    </div>
                    <div className="ml-2">
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-black bg-orange-400 rounded-full">
                        Polska
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to={"/" + userConfig.categories[1].name}>
            <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-600 dark:hover:bg-slate-700 md:max-w-full mb-8">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <StaticImage
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    alt={userConfig.categories[1].subTitle}
                    src={lampyImage}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200">
                    {userConfig.categories[1].title}
                  </h2>
                  <h3 className="text-orange-500 font-semibold">
                  {userConfig.categories[1].subTitle}
                  </h3>
                  <p className="font-sans text-sm mt-2 text-slate-500 dark:text-slate-300">
                  {userConfig.categories[1].description}
                  </p>
                  <div className="bg-transparent pt-2 mr-2 flex justify-end justify-items-end flex-wrap">
                    <div className="ml-2">
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-black bg-orange-400 rounded-full">
                        66
                      </span>
                    </div>
                    <div className="ml-2">
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-black bg-orange-400 rounded-full">
                        Polska
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to={"/" + userConfig.categories[2].name}>
            <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-600 dark:hover:bg-slate-700 md:max-w-full mb-8">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <StaticImage
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    alt={userConfig.categories[2].subTitle}
                    src={radiaImage}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200">
                    {userConfig.categories[2].title}
                  </h2>
                  <h3 className="text-orange-500 font-semibold">
                  {userConfig.categories[2].subTitle}
                  </h3>
                  <p className="font-sans text-sm mt-2 text-slate-500 dark:text-slate-300">
                  {userConfig.categories[2].description}
                  </p>
                  <div className="bg-transparent pt-2 mr-2 flex justify-end justify-items-end flex-wrap">
                    <div className="ml-2">
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-black bg-orange-400 rounded-full">
                        66
                      </span>
                    </div>
                    <div className="ml-2">
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-black bg-orange-400 rounded-full">
                        Polska
                      </span>
                    </div>
                  </div>
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
