import Image from "next/image";
import React from "react";
import fff from "../assets/fff.png";

const AboutApp = () => {
  return (
    <div className="p-5 bg-[#fef6f0] rounded-3xl my-10 space-y-6 py-20">
      <div data-aos="zoom-in-right" data-aos-duration="1500" className="space-y-6 ml-20 tracking-widest mb-18">
        <p className="text-2xl">Built out of frustation</p>
        <h1 className="text-5xl font-bold ">Meet the ahead app</h1>
      </div>
      <div className="grid grid-cols-2">
        <div className="fade-up">
          <Image src={fff} alt="fff" />
        </div>
        <div data-aos="zoom-in-right" data-aos-duration="1500" className=" text-gray-500 text-lg tracking-wide font-medium px-20 z-10">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s,
            <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s,
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutApp;
