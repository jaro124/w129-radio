import * as React from "react"
import Layout from "../components/core/layout"
import Hero from "../components/hero"
import Seo  from "../components/core/seo"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className="p-4">
        <Hero />
      </div>
    </Layout>
  );
}

export const Head = () => <Seo title="Home page" />

export default IndexPage