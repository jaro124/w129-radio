import * as React from "react";
import Layout from "../components/core/layout";
import Seo from "../components/core/seo";

const PostPage = () => {
  return (
    <Layout pageTitle="Blog Page">
      <div className="px-4">
        
        
        
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 justify-end dark:hover:border-gray-500">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
        </div>
        
        <div className="ml-2">
                          <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-black bg-gray-800 rounded-full">
                            gatsbydddfsds
                          </span>
                        </div>


      </div>
    </Layout>
  );
};

export default PostPage;

export const Head = () => <Seo title="Post page" />;
