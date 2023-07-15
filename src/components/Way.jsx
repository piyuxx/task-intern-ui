import Image from "next/image";
import React from "react";
import logo from "../assets/ahead-logo.svg";
import white from "../assets/white.png";

const Cards = ({ title, content }) => {
  return (
    <div className="bg-white rounded-2xl p-5 w-2/3 mr-20 flex flex-col space-y-4">
      <h1 className="font-bold">{title}</h1>
      <p>{content}</p>
    </div>
  );
};

const Way = () => {
  return (
    <div className="grid grid-cols-2 p-12 bg-[#F3F1FF] rounded-3xl w-[90%] m-auto">
      <div className=" space-y-5">
        <h1 data-aos="fade-right" className="text-3xl font-black mb-12">
          Work With Us
        </h1>
        <div
          data-aos="fade-right"
          className="bg-white rounded-2xl  w-3/4 shadow-xl"
        >
          <div className="p-5 space-y-4">
            <Image src={white} alt="vector" className="w-10" />
            <h1 className="font-extrabold text-xl">About</h1>
            <p className="text-base text-gray-700 tracking-wide">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took.
            </p>
          </div>
          <div className="rounded-2xl bg-[#FEF6F0] p-5 space-y-4">
            <h1 className="font-extrabold text-xl">Product</h1>
            <p className="text-base text-gray-700 tracking-wide">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col  items-end space-y-3 mx-10">
        <Image data-aos="fade-left" className="mb-8 w-32" src={logo} alt="logo" />
        <div
          data-aos="fade-up"
          className="space-y-4 items-end flex flex-col h-96 overflow-y-scroll no-scrollbar bg-scroll-blue-500"
        // todo: scroll
        >
          <Cards
            title="Power through, even when the going gets tough"
            content="We help you spot and work around whatever stands in the way, be bad
        habits, fear, etc."
          />
          <Cards
            title="Power through, even when the going gets tough"
            content="We help you spot and work around whatever stands in the way, be bad
        habits, fear, etc."
          />
          <Cards
            title="Power through, even when the going gets tough"
            content="We help you spot and work around whatever stands in the way, be bad
        habits, fear, etc."
          />
          <Cards
            title="Power through, even when the going gets tough"
            content="We help you spot and work around whatever stands in the way, be bad
        habits, fear, etc."
          />
          <Cards
            title="Power through, even when the going gets tough"
            content="We help you spot and work around whatever stands in the way, be bad
        habits, fear, etc."
          />
          <Cards
            title="Power through, even when the going gets tough"
            content="We help you spot and work around whatever stands in the way, be bad
        habits, fear, etc."
          />
        </div>
      </div>
    </div>
  );
};

export default Way;
