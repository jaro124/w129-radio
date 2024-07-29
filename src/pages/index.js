import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/core/layout"
import HeroHome from "../components/hero-home"
import Actions from "../components/actions"
import Seo  from "../components/core/seo"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className="p-4">
        <HeroHome />
        <Actions />
      </div>
    </Layout>
  );
}

export const Head = () => <Seo title="Home page" />

export default IndexPage