import * as React from "react"
import Layout from "../components/core/layout"
import Seo from "../components/core/seo"
import HeroHome from "../components/hero-home"
import Actions from "../components/actions"
import History from "../components/history"

const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
      <div className="p-4">
        <HeroHome />
        <Actions />
        <div className="flex justify-center my-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 uppercase underline decoration-orange-400 lg:text-3xl dark:text-white">
            Historia
          </h1>
        </div>
        </div>
        <History />

      </div>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <Seo title="About page" />;
