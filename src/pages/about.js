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
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <StaticImage
            alt="Pentoda - radiotechnika z dawnych lat"
            src="../images/pentoda-zalozyciele.jpg"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100 dark:bg-slate-800">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100 dark:bg-slate-800"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Pentoda - radiotechnika z dawnych lat
          </h2>

          <p className="mt-4 text-gray-500">
          Celem organizacji jest gromadzenie, renowacja oraz dokumentowanie zabytkowych radioodbiorników oraz innego sprzętu radiotechnicznego.
          </p>
          <p className="mt-4 text-gray-500">
          Adres: Łódź ...
          </p>
          <p className="mt-4 text-gray-500">
          Telefon: 42424242
          </p>
          <p className="mt-4 text-gray-500">
          NIP: 777777777
          </p>
          <p className="mt-4 text-gray-500">
          REGON: 88888888
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
          <h2 className="font-medium text-sm text-orange-400 mb-4 uppercase tracking-wide">
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
              aria-label="Eksponaty"
              className="bg-orange-400 hover:bg-orange-500 text-black font-semibold py-2 px-4 border border-orange-500 hover:border-transparent rounded"
            >
              <Link to="/category">Kategorie eksponatów</Link>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage

export const Head = () => <Seo title="About page" />
