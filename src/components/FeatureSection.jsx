
import Image from "next/image";
import React from "react";
import stepper from "../assets/stepper.jpg";
import timeliner from "../assets/timeliner.jpg";


const FeatureSection = () => {
  const progress = 60;
  return (
    <div className="flex bg-sky-50 rounded-3xl p-20 my-20 flex-col items-center space-y-4">
      <h1>
        Let your friends, family, and co-workers (anonymously) rate your social
        skills.
      </h1>
      <h1 className="text-4xl font-bold">
        Ever wondered what others think of you?
      </h1>
      <div>
        <div mr-8>

          <Image data-aos="fade-up" src={stepper} alt="diagram 1" />


          <div className="  flex justify-between">
            <div className=" fade-up mr-0 font-bold">Component 1</div>
            <div className=" fade-up font-bold flex justify-center">
              <div >Component 2</div>
            </div>
            <div className=" ml-0 font-bold">Component 3</div>
          </div>

        </div>
        <div>
          <Image data-aos="fade-up" src={timeliner} alt="diagram 2" />


        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
