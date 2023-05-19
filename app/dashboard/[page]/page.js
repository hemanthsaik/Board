import React from "react";

const PageNotFound = () => {
  return (
    <div className="w-full h-full flex-center">
      <div className="bg-white w-2/3 h-1/4 flex-center flex-col rounded-lg shadow-lg">
        <p className="text-2xl font-bold">Page is under construction</p>
        <p className="text-lg text-gray-500">Please try again later</p>
      </div>
    </div>
  );
};

export default PageNotFound;
