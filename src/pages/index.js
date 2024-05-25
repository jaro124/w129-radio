import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/core/layout"
import Hero from "../components/hero"
import Seo  from "../components/core/seo"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className="p-4">
        <Hero />
        <div className="flex justify-center mt-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 uppercase underline decoration-orange-400 lg:text-3xl dark:text-white">
              Information
            </h1>
          </div>
        </div>
        <div className="max-w-4xl bg-white dark:bg-black rounded-lg mx-auto my-8 p-16">
          <h1 className="text-2xl text-black dark:text-gray-400 font-medium mb-2">
            Radiotechnika z dawnych lat
          </h1>
          <h2 className="font-medium text-sm text-orange-400 mb-4 uppercase tracking-wide">
            Pentoda
          </h2>
          <p className="text-primary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum illo
            cupiditate molestias atque consequuntur ea quo cumque, odit velit
            sint similique? Asperiores ratione aperiam tempora, alias corrupti
            deleniti quaerat molestiae.
          </p>
          <div className="mt-4">
            <button
              aria-label="Read more"
              className="bg-orange-400 hover:bg-orange-500 text-black font-semibold py-2 px-4 border border-orange-500 hover:border-transparent rounded"
            >
              <Link to="/about">Zobacz więcej</Link>
            </button>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo title="Home page" />

export default IndexPage