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
          <p className='ml-4'>
            A1 = 6 points, B2 = 5 points, B3 = 4 points C4 = 3points C5 = 2
            points, C6 = 1 point, D7, E8 and F9 = 0 point
          </p>
          <li className='list-disc'>
            UTME Result: 60 points (UTME category only){" "}
          </li>
          <li className='list-disc'>
            DE Result: 30 points (DE category only){" "}
          </li>
          <li className='list-disc'>One Sitting: 10 points</li>
          <li className='list-disc'>Two Sitting: 6 points</li>
          <h2 className='font-bold text-lg mt-6'>How to Use</h2>
          <li className='list-disc'>
            For DE students, the grade total or point obtainable is the maximum
            CGPA or point that a candidate can attain, for instance, the grade
            total for an ND student is 4.0, which IJMB is 15. Enter the
            corresponing max grade point obtainable for the result you are using
            (NCE, IJMB, JUPEB, ND, HND, BSC)
          </li>
          <li className='list-disc'>
            For DE students, the grade point or CGPA attained is the CGPA or
            grade point you graduated with, e.g 3.5, 3.75 etc for NCE, ND and
            15, 12, etc for IJMB and JUPEB.
          </li>
        </div>
        <Form />
        <p className='text-white text-center text-sm'>
          Built by{" "}
          <a
            href='https://wa.me/2348132157321'
            className='text-sky-400 font-bold'
          >
            Chosen Foundation
          </a>{" "}
          for FUNAAB Aspirants - Always choose Chosen.
        </p>
      </div>
    </div>
  );
};

export default App;
