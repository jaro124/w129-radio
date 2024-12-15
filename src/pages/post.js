import * as React from "react"
import Layout from "../components/core/layout"
import Seo from "../components/core/seo"
import ImageGallery from "../components/image-gallery"

const PostPage = () => {
  
  return (
    <Layout pageTitle="Blog Page">
      <div className="px-4 text-orange-700 text-xs mb-6 mx-2 ">
        

        <ImageGallery />

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">sdgjdgjhs</div>


        


      </div>
    </Layout>
  );
};

export default PostPage;

export const Head = () => <Seo title="Post page" />;
