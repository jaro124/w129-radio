import * as React from "react"
import Layout from "../components/core/layout"
import SectionHero from "../components/section-hero"
import SectionRadio from "../components/section-radio"
import SectionAbout from "../components/section-about"
import Seo  from "../components/core/seo"

const IndexPage = () => {
  return (
    <Layout pageTitle="Pentoda">
      <div className="relative pt-4">
        <SectionHero />
        <SectionRadio />
        <SectionAbout />
      </div>
    </Layout>
  );
}

export default IndexPage

export const Head = () => (
  <Seo
    title="Pentoda - radiotechnika z dawnych lat"
    description="Zapraszamy do zapoznania się z działalnością stowarzyszenia Pentoda, organizacji skupiającej pasjonatów radiofonii i historii techniki. Dowiedz się więcej o członkach stowarzyszenia, ich pasji i doświadczeniu. Poznaj historię organizacji i jej działalność na przestrzeni lat."
    keywords={["Pentoda", "Stowarzyszenie", "Eksponaty", "Odbiorniki radiowe", "Lampy"]}
  />
);