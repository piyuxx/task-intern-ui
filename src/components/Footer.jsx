import React from "react";
import { FaLocationDot } from 'react-icons/fa6'
import { HiMail } from 'react-icons/hi'
import DownloadButton from "./Button";
import logo from "../assets/ahead-logo.jpg";
import logos from "../assets/ahead-logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex border-t-2 items-center flex-col space-y-5 m-5 pt-16">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex items-center flex-col space-y-4 mb-6"
      >
        <Image className="w-12 rounded-xl" src={logo} alt="logo icon" />
        <Image src={logos} alt="logo" />
      </div>
      <div className="flex space-x-8 mb-4">
        <div className="flex items-center justify-center">
          <div className="bg-[#9DF1D9] w-6 h-6 flex items-center justify-center rounded-[50%] mr-1">
            <FaLocationDot />
          </div>
          <p>New Delhi, India</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-[#9DF1D9] w-6 h-6 flex items-center justify-center rounded-[50%] mr-1">
            <HiMail />
          </div>
          <p>hi@ahead-app.com</p>
        </div>
      </div>
      <DownloadButton />
      <p className="text-xs text-gray-500">
        @ 2023 Ahead app, All right reserved
      </p>
    </div>
  );
};

export default Footer;