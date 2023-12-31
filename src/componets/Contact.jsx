import React from "react";
import Contactpic from "../assets/ContactPic.jpg";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700">Send us a message</h2>
      <p className="text-center text-gray-700 py-2">We're standing by!</p>
      <div className="grid md:grid-cols-2 gap-4">
        <img
          src={Contactpic}
          alt="/"
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
        />
        <form>
          <div className="grid grid-cols-2">
            <input
              className="border m-2 p-2 border-[#0000005b] rounded"
              type="text"
              placeholder="First"
            />
            <input
              className="border m-2 p-2 border-[#0000005b] rounded"
              type="text"
              placeholder="Last"
            />
            <input
              className="border m-2 p-2 border-[#0000005b] rounded"
              type="email"
              placeholder="Email"
            />
            <input
              className="border m-2 p-2 border-[#0000005b] rounded"
              type="tel"
              placeholder="Phone"
            />
            <input
              className="border col-span-2 p-2 m-2 border-[#0000005b] rounded"
              type="text"
              placeholder="Address"
            />
            <textarea
              className="border col-span-2 m-2 p-2 border-[#0000005b] rounded"
              cols="30"
              rows="10"
            ></textarea>
            <button className="col-span-2 m-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
