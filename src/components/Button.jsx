import React from "react";
import { AiFillApple } from "react-icons/ai";

const DownloadButton = () => {
  return (
    <button className="bg-black text-white flex items-center p-1 px-2 rounded-lg">
      <AiFillApple className="text-4xl" />
      <section>
        <p className="text-xs">Download on</p>
        <p className="text-xl font-bold">Appstore</p>
      </section>
    </button>
  );
};

export default DownloadButton;
