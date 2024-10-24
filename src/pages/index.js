import * as React from "react"
import Layout from "../components/core/layout"
import SectionHero from "../components/section-hero"
import SectionRadio from "../components/section-radio"
import SectionAbout from "../components/section-about"
import Seo  from "../components/core/seo"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className="relative pt-4">
        <SectionHero />
        <SectionRadio />
        <SectionAbout />
      </div>
    </Layout>
  );
}

export const Head = () => <Seo title="Home page" />

export default IndexPage