import React from "react"
import { Link } from "gatsby"
import { ArrowRightIcon } from "@heroicons/react/16/solid"
import { ArrowLeftIcon } from "@heroicons/react/16/solid"

const PostListNavigation = ({ numPages, currentPage, category }) => {
  const preLink = "/" + category + "/"
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();
  const prevPageLink = preLink + prevPage;
  const nextPageLink = preLink + nextPage;
  return (
    <div>
      <div>
        <div className="flex flex-wrap justify-between w-full mt-8 rounded-md shadow-lg text-sm sm:text-base bg-white dark:bg-black p-2">
          <div className="w-full md:w-1/3 text-center md:text-left">
            {!isFirst && (
              <Link to={prevPageLink}>
                <p className="block md:inline-block text-sm mt-4 md:mt-0 text-gray-500 hover:text-orange-400">
                <ArrowLeftIcon className="size-5" />
                </p>
              </Link>
            )}
          </div>
          <div className="w-full md:w-1/3 text-sm text-gray-500 text-center">
            Strona {currentPage} z {numPages}
          </div>
          <div className="w-full md:w-1/3 pt-2 md:pt-0 text-center md:text-right">
            {!isLast && (
              <Link to={nextPageLink}>
                <p className="block md:inline-block mt-4 md:mt-0 text-gray-500 hover:text-orange-400">
                  <ArrowRightIcon className="size-5" />
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostListNavigation;