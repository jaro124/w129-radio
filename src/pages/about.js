import * as React from "react"
import Layout from "../components/core/layout"
import Seo from "../components/core/seo"
import SectionOwners from "../components/section-owners"
import SectionActions from "../components/section-actions"
import SectionHistory from "../components/section-history"
import SectionStatute from "../components/section-statute"

const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
      <div className="p-4">
        <SectionOwners />
        <SectionStatute />
        <SectionActions />
        <div className="flex justify-center my-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 uppercase underline decoration-orange-400 lg:text-3xl dark:text-white">
            Historia
          </h1>
        </div>
        </div>
        <SectionHistory />

      </div>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => (
  <Seo
    title="Pentoda - radiotechnika z dawnych lat"
    description="Zapraszamy do zapoznania się z działalnością stowarzyszenia Pentoda, organizacji skupiającej pasjonatów radiofonii i historii techniki. Dowiedz się więcej o członkach stowarzyszenia, ich pasji i doświadczeniu. Poznaj historię organizacji i jej działalność na przestrzeni lat."
    keywords={["Pentoda", "Stowarzyszenie", "Eksponaty", "Odbiorniki radiowe", "Lampy"]}
    pathname="/about"
  />
);
