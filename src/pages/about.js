import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/core/layout"
import Seo  from "../components/core/seo"
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
      <div className="px-4">


      <section>
  <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div class="relative z-10 lg:py-16">
        <div class="relative h-64 sm:h-80 lg:h-full">
          <StaticImage
            alt="Pentoda - radiotechnika z dawnych lat"
            src="../images/pentoda-zalozyciele.jpg"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div class="relative flex items-center bg-gray-100 dark:bg-slate-800">
        <span
          class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100 dark:bg-slate-800"
        ></span>

        <div class="p-8 sm:p-16 lg:p-24">
          <h2 class="text-2xl font-bold sm:text-3xl">
            Pentoda - radiotechnika z dawnych lat
          </h2>

          <p class="mt-4 text-gray-600">
          Celem organizacji jest gromadzenie, renowacja oraz dokumentowanie zabytkowych radioodbiorników oraz innego sprzętu radiotechnicznego.
          </p>
          <p class="mt-4 text-gray-600">
          Łódź ...
          </p>
          <p class="mt-4 text-gray-600">
          NIP: 7262703226
          </p>
          <p class="mt-4 text-gray-600">
          REGON: 527492966
          </p>

        </div>
      </div>
    </div>
  </div>
</section>




        <div className="max-w-4xl bg-white dark:bg-black rounded-lg mx-auto my-8 p-16">
          <h1 className="text-2xl font-medium text-black dark:text-gray-400 mb-2">
            About me
          </h1>
          <h2 className="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">
            A few words about me
          </h2>
          <p className="text-primary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum illo
            cupiditate molestias atque consequuntur ea quo cumque, odit velit
            sint similique? Asperiores ratione aperiam tempora, alias corrupti
            deleniti quaerat molestiae.
          </p>
          <p className="text-primary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum illo
            cupiditate molestias atque consequuntur ea quo cumque, odit velit
            sint similique? Asperiores ratione aperiam tempora, alias corrupti
            deleniti quaerat molestiae.
          </p>
          <div className="mt-4">
            <button
              aria-label="Articles"
              className="bg-blue-400 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4 mt-2"
            >
              <Link to="/blog">Articles</Link>
            </button>
            <button
              aria-label="Back to home page"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4 mt-2"
            >
              <Link to="/">Back to home page</Link>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage

export const Head = () => <Seo title="About page" />
