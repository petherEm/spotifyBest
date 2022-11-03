import React, { useState } from "react";
import { HiX } from "react-icons/hi";

const Training = () => {
  const [active, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(false);
  };

  return (
    <section
      className={!active ? "hidden" : "block bg-yellow-500 text-gray-800 p-2"}
    >
      <div className="flex items-center justify-start">
        <HiX className="font-bold text-2xl text-red-600 animate-pulse cursor-pointer" onClick={handleClick} />
        <h2 className="text-md">
          Hi, this is a training project to master{" "}
          <span className="font-bold">
            React, Redux, TailwindCSS and RapidAPI
          </span>{" "}
          integration. Adapted from{" "}
          <a className="font-bold underline" href="https://www.jsmastery.pro/">
            JavaScript Mastery
          </a>
        </h2>
      </div>
    </section>
  );
};

export default Training;
