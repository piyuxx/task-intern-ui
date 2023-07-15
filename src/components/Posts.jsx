import React from "react";
import JobSlider from "./JobSlider.jsx";

const Posts = () => {
  return (
    <div className="m-12 space-y-10 p-5 mb-24">
      <h1 data-aos="fade-right" className="text-4xl font-bold">
        Open vacancies
      </h1>
      <JobSlider />
    </div>
  );
};

export default Posts;
