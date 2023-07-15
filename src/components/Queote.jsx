import Image from "next/image";
import React from "react";
import teamahead from "../assets/teamahead.png";

const Queote = () => {
  return (
    <div className="flex items-center flex-col p-20 my-16 gap-2">
      <p className="mb-0 text-lg">We take privacy seriously</p>
      <p className="mt-0 text-4xl font-black">Before you get started</p>
      <p data-aos="fade-up" className="text-bold text-xl mt-5 text-center">
        &quot;We won&apos;t share your answers with anyone and won&apos;t ever tell <br />
        you which friends said what about you&quot;
      </p>
      <p data-aos="fade-up" className="py-6 flex text-xl">
        With love, <Image className="w-14 mx-2" src={teamahead} alt="ahead" />
      </p>
      <div data-aos="zoom-in" className="flex flex-col items-center space-y-4">
        <button className="text-center bg-black text-white rounded-full p-2">
          Start a test
        </button>
        <p data-aos="fade-in" className="text-sm text-gray-500">
          Take only 5 minutes
        </p>
      </div>
    </div>
  );
};

export default Queote;
