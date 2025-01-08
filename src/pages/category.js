import React from "react";
import { Link } from "gatsby";
import Layout from "../components/core/layout";
import Seo from "../components/core/seo";
import { StaticImage } from "gatsby-plugin-image";

const userConfig = require("../../config.js");

const CategoryList = () => {
  const radiaImage = "../images/category-radia.jpg"
  const lampyImage = "../images/category-lampy.jpg"
  const odbiornikiImage = "../images/category-odbiorniki.jpg"
  const radiostacjeImage = "../images/category-radiostacje.jpg"
  const czasopismaImage = "../images/category-czasopisma.jpg"
  const wtyczkiImage = "../images/category-wtyczki.jpg"
  const galkiImage = "../images/category-galki.jpg"
  const skaleImage = "../images/category-skale.jpg"
  const sciankiImage = "../images/category-scianki.jpg"
  const filatelistykaImage = "../images/category-filatelistyka.jpg"
  const filumenistykaImage = "../images/category-filumenistyka.jpg"
  const medaleImage = "../images/category-medale.jpg"
  const emblematyImage = "../images/category-emblematy.jpg"
  const variaImage = "../images/category-varia.jpg"
  const konstrukcjeImage = "../images/category-konstrukcje.jpg"
  const miernikiImage = "../images/category-mierniki.jpg"
  
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
                    src={radiaImage}
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
                        51
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
                        100
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
                    src={odbiornikiImage}
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
                        1
                      </span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to={"/" + userConfig.categories[3].name}>
            <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-600 dark:hover:bg-slate-700 md:max-w-full mb-8">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <StaticImage
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    alt={userConfig.categories[3].subTitle}
                    src={radiostacjeImage}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200">
                    {userConfig.categories[3].title}
                  </h2>
                  <h3 className="text-orange-500 font-semibold">
                  {userConfig.categories[3].subTitle}
                  </h3>
                  <p className="font-sans text-sm mt-2 text-slate-500 dark:text-slate-300">
                  {userConfig.categories[3].description}
                  </p>
                  <div className="bg-transparent pt-2 mr-2 flex justify-end justify-items-end flex-wrap">
                    <div className="ml-2">
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-black bg-orange-400 rounded-full">
                        3
                      </span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to={"/" + userConfig.categories[4].name}>
            <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-600 dark:hover:bg-slate-700 md:max-w-full mb-8">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <StaticImage
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    alt={userConfig.categories[4].subTitle}
                    src={czasopismaImage}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200">
                    {userConfig.categories[4].title}
                  </h2>
                  <h3 className="text-orange-500 font-semibold">
                  {userConfig.categories[4].subTitle}
                  </h3>
                  <p className="font-sans text-sm mt-2 text-slate-500 dark:text-slate-300">
                  {userConfig.categories[4].description}
                  </p>
                  <div className="bg-transparent pt-2 mr-2 flex justify-end justify-items-end flex-wrap">
                    <div className="ml-2">
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-black bg-orange-400 rounded-full">
                        56
                      </span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </Link>    

          <Link to={"/" + userConfig.categories[5].name}>
            <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-600 dark:hover:bg-slate-700 md:max-w-full mb-8">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <StaticImage
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    alt={userConfig.categories[5].subTitle}
                    src={wtyczkiImage}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200">
                    {userConfig.categories[5].title}
                  </h2>
                  <h3 className="text-orange-500 font-semibold">
                  {userConfig.categories[5].subTitle}
                  </h3>
                  <p className="font-sans text-sm mt-2 text-slate-500 dark:text-slate-300">
                  {userConfig.categories[5].description}
                  </p>
                  <div className="bg-transparent pt-2 mr-2 flex justify-end justify-items-end flex-wrap">
                    <div className="ml-2">
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-black bg-orange-400 rounded-full">
                        9
                      </span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </Link>  

          <Link to={"/" + userConfig.categories[6].name}>
            <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-600 dark:hover:bg-slate-700 md:max-w-full mb-8">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <StaticImage
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    alt={userConfig.categories[6].subTitle}
                    src={galkiImage}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200">
                    {userConfig.categories[6].title}
                  </h2>
                  <h3 className="text-orange-500 font-semibold">
                  {userConfig.categories[6].subTitle}
                  </h3>
                  <p className="font-sans text-sm mt-2 text-slate-500 dark:text-slate-300">
                  {userConfig.categories[6].description}
                  </p>
                  <div className="bg-transparent pt-2 mr-2 flex justify-end justify-items-end flex-wrap">
                    <div className="ml-2">
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-black bg-orange-400 rounded-full">
                        7
                      </span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </Link>       

          <Link to={"/" + userConfig.categories[7].name}>
            <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-600 dark:hover:bg-slate-700 md:max-w-full mb-8">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <StaticImage
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    alt={userConfig.categories[7].subTitle}
                    src={skaleImage}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200">
                    {userConfig.categories[7].title}
                  </h2>
                  <h3 className="text-orange-500 font-semibold">
                  {userConfig.categories[7].subTitle}
                  </h3>
                  <p className="font-sans text-sm mt-2 text-slate-500 dark:text-slate-300">
                  {userConfig.categories[7].description}
                  </p>
                  <div className="bg-transparent pt-2 mr-2 flex justify-end justify-items-end flex-wrap">
                    <div className="ml-2">
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-black bg-orange-400 rounded-full">
                        2
                      </span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </Link> 

          <Link to={"/" + userConfig.categories[8].name}>
            <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-600 dark:hover:bg-slate-700 md:max-w-full mb-8">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <StaticImage
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    alt={userConfig.categories[8].subTitle}
                    src={sciankiImage}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200">
                    {userConfig.categories[8].title}
                  </h2>
                  <h3 className="text-orange-500 font-semibold">
                  {userConfig.categories[8].subTitle}
                  </h3>
                  <p className="font-sans text-sm mt-2 text-slate-500 dark:text-slate-300">
                  {userConfig.categories[8].description}
                  </p>
                  <div className="bg-transparent pt-2 mr-2 flex justify-end justify-items-end flex-wrap">
                    <div className="ml-2">
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-black bg-orange-400 rounded-full">
                        1
                      </span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </Link>             

          <Link to={"/" + userConfig.categories[9].name}>
            <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-600 dark:hover:bg-slate-700 md:max-w-full mb-8">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <StaticImage
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    alt={userConfig.categories[9].subTitle}
                    src={filatelistykaImage}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200">
                    {userConfig.categories[9].title}
                  </h2>
                  <h3 className="text-orange-500 font-semibold">
                  {userConfig.categories[9].subTitle}
                  </h3>
                  <p className="font-sans text-sm mt-2 text-slate-500 dark:text-slate-300">
                  {userConfig.categories[9].description}
                  </p>
                  <div className="bg-transparent pt-2 mr-2 flex justify-end justify-items-end flex-wrap">
                    <div className="ml-2">
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-black bg-orange-400 rounded-full">
                        7
                      </span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </Link>    

          <Link to={"/" + userConfig.categories[10].name}>
            <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-600 dark:hover:bg-slate-700 md:max-w-full mb-8">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <StaticImage
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    alt={userConfig.categories[10].subTitle}
                    src={filumenistykaImage}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200">
                    {userConfig.categories[10].title}
                  </h2>
                  <h3 className="text-orange-500 font-semibold">
                  {userConfig.categories[10].subTitle}
                  </h3>
                  <p className="font-sans text-sm mt-2 text-slate-500 dark:text-slate-300">
                  {userConfig.categories[10].description}
                  </p>
                  <div className="bg-transparent pt-2 mr-2 flex justify-end justify-items-end flex-wrap">
                    <div className="ml-2">
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-black bg-orange-400 rounded-full">
                        12
                      </span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </Link>    

          <Link to={"/" + userConfig.categories[11].name}>
            <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-600 dark:hover:bg-slate-700 md:max-w-full mb-8">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <StaticImage
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    alt={userConfig.categories[11].subTitle}
                    src={medaleImage}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200">
                    {userConfig.categories[11].title}
                  </h2>
                  <h3 className="text-orange-500 font-semibold">
                  {userConfig.categories[11].subTitle}
                  </h3>
                  <p className="font-sans text-sm mt-2 text-slate-500 dark:text-slate-300">
                  {userConfig.categories[11].description}
                  </p>
                  <div className="bg-transparent pt-2 mr-2 flex justify-end justify-items-end flex-wrap">
                    <div className="ml-2">
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-black bg-orange-400 rounded-full">
                        13
                      </span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </Link>  

          <Link to={"/" + userConfig.categories[12].name}>
            <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-600 dark:hover:bg-slate-700 md:max-w-full mb-8">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <StaticImage
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    alt={userConfig.categories[12].subTitle}
                    src={emblematyImage}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200">
                    {userConfig.categories[12].title}
                  </h2>
                  <h3 className="text-orange-500 font-semibold">
                  {userConfig.categories[12].subTitle}
                  </h3>
                  <p className="font-sans text-sm mt-2 text-slate-500 dark:text-slate-300">
                  {userConfig.categories[12].description}
                  </p>
                  <div className="bg-transparent pt-2 mr-2 flex justify-end justify-items-end flex-wrap">
                    <div className="ml-2">
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-black bg-orange-400 rounded-full">
                        16
                      </span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </Link>        

          <Link to={"/" + userConfig.categories[13].name}>
            <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-600 dark:hover:bg-slate-700 md:max-w-full mb-8">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <StaticImage
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    alt={userConfig.categories[13].subTitle}
                    src={variaImage}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200">
                    {userConfig.categories[13].title}
                  </h2>
                  <h3 className="text-orange-500 font-semibold">
                  {userConfig.categories[13].subTitle}
                  </h3>
                  <p className="font-sans text-sm mt-2 text-slate-500 dark:text-slate-300">
                  {userConfig.categories[13].description}
                  </p>
                  <div className="bg-transparent pt-2 mr-2 flex justify-end justify-items-end flex-wrap">
                    <div className="ml-2">
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-black bg-orange-400 rounded-full">
                        5
                      </span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </Link>   

          <Link to={"/" + userConfig.categories[14].name}>
            <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-600 dark:hover:bg-slate-700 md:max-w-full mb-8">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <StaticImage
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    alt={userConfig.categories[14].subTitle}
                    src={konstrukcjeImage}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200">
                    {userConfig.categories[14].title}
                  </h2>
                  <h3 className="text-orange-500 font-semibold">
                  {userConfig.categories[14].subTitle}
                  </h3>
                  <p className="font-sans text-sm mt-2 text-slate-500 dark:text-slate-300">
                  {userConfig.categories[14].description}
                  </p>
                  <div className="bg-transparent pt-2 mr-2 flex justify-end justify-items-end flex-wrap">
                    <div className="ml-2">
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-black bg-orange-400 rounded-full">
                        2
                      </span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to={"/" + userConfig.categories[15].name}>
            <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-600 dark:hover:bg-slate-700 md:max-w-full mb-8">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <StaticImage
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    alt={userConfig.categories[15].subTitle}
                    src={miernikiImage}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200">
                    {userConfig.categories[15].title}
                  </h2>
                  <h3 className="text-orange-500 font-semibold">
                  {userConfig.categories[15].subTitle}
                  </h3>
                  <p className="font-sans text-sm mt-2 text-slate-500 dark:text-slate-300">
                  {userConfig.categories[15].description}
                  </p>
                  <div className="bg-transparent pt-2 mr-2 flex justify-end justify-items-end flex-wrap">
                    <div className="ml-2">
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-black bg-orange-400 rounded-full">
                        4
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
    title="Pentoda - radiotechnika z dawnych lat"
    description="Zapraszamy na niezwykłą podróż w przeszłość do świata starych radioodbiorników. Zobacz, jak ewoluowała technika i design przez dekady."
    keywords={["Pentoda", "Stowarzyszenie", "Eksponaty", "Odbiorniki radiowe", "Lampy"]}
    pathname="/category"
  />
);
