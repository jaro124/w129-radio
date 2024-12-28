import * as React from "react";
import Layout from "../components/core/layout";
import Seo from "../components/core/seo";

const PostPage = () => {
  return (
    <Layout pageTitle="Blog Page">
      <div className="px-4 text-orange-700 text-xs mb-6 mx-2 bg-gray-800">
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          sdgjdgjhs
        </div>

        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl border dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-500">
          <div className="py-2 text-center">
            <span className="block text-xl font-bold text-gray-800 dark:text-white">
              Title
            </span>
            <span className="text-sm text-gray-700 dark:text-blue-400">
              Sub
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;

export const Head = () => <Seo title="Post page" />;
