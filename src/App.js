import React from "react";
import Heading from "./header";
import Form from "./form";

const App = () => {
  return (
    <div className='p-5 py-20'>
      <div className='max-w-4xl mx-auto'>
        <Heading />
        <div className='bg-gray-900 bg-opacity-60 text-white text-sm flex flex-col gap-2 rounded-md p-3 my-5'>
          <h2 className='font-bold text-lg'>How it works</h2>
          <li className='list-disc'>O level Result: 30 points</li>
          <li className='list-disc'>UTME Result: 60 points</li>
          <li className='list-disc'>One Sitting: 10 points</li>
          <li className='list-disc'>Two Sitting: 6 points</li>
        </div>
        <Form />
        <p className='text-white text-center text-sm'>
          Built by{" "}
          <a
            href='https://wa.me/2348132157321'
            className='text-blue-500 font-bold'
          >
            Chosen Foundation
          </a>{" "}
          for FUNAAB Aspirants - Always choose Chosen
        </p>
      </div>
    </div>
  );
};

export default App;
