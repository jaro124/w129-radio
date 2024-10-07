import React from "react"
import { Link } from "gatsby"

const PostNavigation = ({ category}) => (
  <div>  
    <div className="flex flex-wrap justify-between mt-8 w-full rounded-md shadow-lg text-sm sm:text-base bg-white dark:bg-black p-2">
      <div className="w-full md:w-1/3 text-center md:text-left">
        {category === false ? null : (
          <>
            {category && (
                <Link to="/" className="text-gray-500 hover:text-orange-400"> </Link>
            )}
          </>
        )}    
      </div>
      <div className="w-full md:w-1/3 pt-2 md:pt-0 text-center">
      <Link to={category} className="text-gray-500 hover:text-orange-400">Wróć do listy</Link>
      </div>
      <div className="w-full md:w-1/3 pt-2 md:pt-0 text-center md:text-right">
        {category === false ? null : (
          <>
            {category && (
              <Link to="/" className="text-gray-500 hover:text-orange-400"> </Link>
            )}
          </>
        )}
      </div>
    </div>
  </div>
)

export default PostNavigation