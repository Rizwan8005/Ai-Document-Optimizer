import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="px-8 xs:px-3 flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl lg:text-2xl sm:text-lg font-bold mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg mb-8 xs:text-xs">
          The page you're looking for does not exist.
        </p>
        <div className="text-mainWhite font-bold inline px-8 py-3 rounded-full bg-yellowColor cursor-pointer lg:text-sm sm:px-6 sm:py-3 sm:text-xs">
          <Link to="/">Go to Home</Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
