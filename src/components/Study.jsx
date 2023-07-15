import Image from "next/image";
import React from "react";
import Slider from "./SliderComponent";
import pic from "../assets/ghost.png";

const Study = () => {
  return (
    <div>
      <div className="grid grid-cols-3 justify-between my-6">
        <div className="p-6 font-bold text-xl lg:text-4xl">
          The Power of Emotional Intelligence
        </div>
        <div className="p-6 text-gray-500 text-sm lg:text-base font-medium tracking-wide">
          Emotional Intelligence (EI) is the ability to understand and manage
          your own emotions, as well as recognize and empathize with the
          emotions of others. It plays a crucial role in various aspects of our
          lives, including relationships, communication, and decision-making.
        </div>
        <div className="p-6 text-gray-500 text-sm lg:text-base font-medium tracking-wide">
          By developing emotional intelligence, we can enhance our self-awareness,
          self-regulation, motivation, empathy, and social skills. This can lead
          to improved mental well-being, stronger relationships, and greater
          success in both personal and professional domains.
        </div>
      </div>
      <div>
        <div className="flex">
          <h1
            data-aos="fade-right"
            data-aos-duration="1500"
            className="text-2xl lg:text-4xl font-bold p-6"
          >
            Discover the Impact
          </h1>
          <Image
            data-aos="fade-left"
            data-aos-duration="1500"
            className="w-20"
            src={pic}
            alt="pic"
          />
        </div>
        <div className="mb-20">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Study;

