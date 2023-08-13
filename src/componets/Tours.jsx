import React from "react";
import TourPic from "../assets/tourpic.jpg";

const Tours = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="lg:max-w-[95%] mx-auto grid lg:gap-20 lg:grid-cols-2">
        <img className="max-w-[900px] md:w-[100%] my-4" src={TourPic} alt="/" />
        <div className="flex flex-col justify-center max-w-[75%]">
          <p className="text-[#00df9a] font-bold ">TOURS</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-thin uppercase py-2">
            Family tours
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className="bg-transparent border-[#00000031] border-2 text-[#00000086] w-[200px] rounded-md my-8 md:mx-0 py-3 font-medium uppercase text-xl">
            Book A Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tours;
