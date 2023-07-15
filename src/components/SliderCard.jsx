import React from "react";

const SliderCard = ({ title, emoji, bgColor, content, tilted, text }) => {
    return (
        <div
            className={`rounded-2xl p-6 py-8 flex-col w-96 space-y-5 ${bgColor} bg-pr scroll-smooth ${tilted ? "-rotate-6" : "rotate-0"
                }`}
        >
            <div className="text-3xl">{emoji}</div>
            <h1 className={`text-black font-semibold text-lg ${text} `}>{title}</h1>
            <p className={`text-gray-500 text-sm ${text}`}>{content}</p>
        </div>
    );
};

export default SliderCard;