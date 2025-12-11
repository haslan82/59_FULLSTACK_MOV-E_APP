import React from 'react'
import { PiUserCircleFill } from "react-icons/pi";

const Loader = () => {


  return (
    <div className="flex items-center justify-center mt-20  ">
      <PiUserCircleFill className="text-9xl text-gray-300 animate-spin" />
    </div>


  );
}

export default Loader;


/* uiverse.io adresinden loader alabilirsin */