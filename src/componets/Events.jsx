import React from "react";
import Hiking from "../assets/Hiking.jpg";
import Waterfall from "../assets/Wf.jpg";
import Resort from "../assets/Resort.jpg";

const Events = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Resort
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src={Resort}
          alt="/"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Activities
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src={Waterfall}
          alt="/"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Hiking
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src={Hiking}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Events;
