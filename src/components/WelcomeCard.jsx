import React from "react";
import { assets } from "../data.js";
const WelcomeCard = ({ handleStartTest }) => {
  return (
    <div className="flex flex-col items-center gap-8">
      <img
        src={assets.onlineTestImg}
        alt="test"
        className="w-[350px] lg:w-[400px] h-auto"
      />
      <h1 className="font-outfit font-bold text-3xl xl:text-5xl">
        Personality Test
      </h1>
      <button
        onClick={handleStartTest}
        className="font-outfit font-semibold text-lg w-[60%] md:w-[40%]"
      >
        Start Test
      </button>
    </div>
  );
};

export default WelcomeCard;
