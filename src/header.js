import React from "react";
import logo from "./logo.png";

const header = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <img className='logo' alt='logo' src={logo}></img>
      <h1 className='text-4xl my-2 font-bold text-green-300 text-center'>
        Composite Calculator
      </h1>
      <h3 className='text-white text-center'>
        Calculate your composite and know where you stand.
      </h3>
    </div>
  );
};

export default header;
