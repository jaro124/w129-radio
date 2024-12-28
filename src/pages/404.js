import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const NotFoundPage = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 text-black dark:text-gray-400">
      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <div className="w-full h-full lg:w-1/2 lg:h-full">
          <div className="relative w-full h-full">
            <StaticImage
              src="../images/site-image-2.jpg"
              alt="Background"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.5)" }}
            />
          </div>
          <div className="w-full bg-white dark:bg-black md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:inset-x-0 bottom-0 lg:top-0 md:mt-8 lg:w-3/5 lg:left-0  lg:mt-7 lg:ml-20 lg:mb-8 xl:mt-16 xl:mb-16 xl:ml-12">
            <div className="flex flex-col w-full p-12 md:px-16">
              <h2 className="text-2xl font-medium text-black dark:text-gray-400 lg:text-4xl">
                Strony nie znaleziono
              </h2>
              <h3 className="text-xl font-medium text-orange-400 lg:text-2xl">
                Błąd 404
              </h3>
              <p className="mt-4">
                Strony której szukałeś nie znaleziono. Być może błędnie
                wprowadziłeś adres strony lub po prostu taka strona nie
                istnieje.
              </p>
              <div className="mt-8">
                <button className="bg-orange-400 hover:bg-orange-500 text-black font-semibold py-2 px-4 border border-orange-500 hover:border-transparent rounded">
                  <Link to="/">Wróć na stronę główną</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
