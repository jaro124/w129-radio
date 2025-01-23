import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const CardCategory = ({ category }) => {
  return (
    <div>
          <Link to={"/" + category.name}>
            <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-600 dark:hover:bg-slate-700 md:max-w-full mb-8">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <GatsbyImage image={category.image} alt={category.subTitle} className="h-48 w-full object-cover md:h-full md:w-48" />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200">
                    {category.title}
                  </h2>
                  <h3 className="text-orange-500 font-semibold">
                  {category.subTitle}
                  </h3>
                  <p className="font-sans text-sm mt-2 text-slate-500 dark:text-slate-300">
                  {category.description}
                  </p>
                  <div className="bg-transparent pt-2 mr-2 flex justify-end justify-items-end flex-wrap">
                    <div className="ml-2">
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-black bg-orange-400 rounded-full">
                        {category.counter}
                      </span>
                    </div>
                    </div>
                </div>
              </div>
            </div>
          </Link>
    </div>
  );
}

export default CardCategory