import React, { useState } from "react";
import SelectGrade from "./Gradeselect";

const Form = () => {
  const [user, setUser] = useState({});
  const [composite, setComposite] = useState(0);
  const inputHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const calculate = (e) => {
    e.preventDefault();
    const {
      maths,
      eng,
      chm,
      bio,
      phy,
      no_of_sittings,
      utmeValue,
      DETotal,
      DEValue,
      category,
    } = user;
    const Olevel = +maths + +eng + +chm + +bio + +phy;
    const OlevelTotal = (Olevel / 30) * 30;
    const utmeTotal = (+utmeValue / 400) * 60;
    const DE = (+DEValue / +DETotal) * 60;
    let total;
    console.log(category === "DE");
    if (category === "DE") {
      total = OlevelTotal + DE + +no_of_sittings;
    } else if (category === "UTME") {
      total = OlevelTotal + utmeTotal + +no_of_sittings;
    }

    setComposite(total.toFixed(1));
  };

  return (
    <form className='text-white bg-opacity-50' onSubmit={calculate}>
      <h2 className='font-medium text-lg uppercase text-green-500 mt-10'>
        Personal Information
      </h2>
      <div className='my-5 bg-gray-900 bg-opacity-60 p-8 rounded-2xl'>
        <div className='grid grid-cols-2 gap-4 my-4'>
          <div className=''>
            <label htmlFor='userName' className='font-medium'>
              Username
            </label>
            <input
              placeholder='Enter Username'
              name='name'
              type='text'
              id='userName'
              required
              className='my-2 p-3 w-full rounded-md bg-gray-700 placeholder: text-xs'
              onChange={inputHandler}
            />
          </div>
          <div className=''>
            <label htmlFor='course' className='font-medium'>
              Course Chosen
            </label>
            <input
              placeholder='Enter Username'
              name='course'
              type='text'
              id='course'
              required
              className='my-2 p-3 w-full rounded-md bg-gray-700 placeholder: text-xs'
              onChange={inputHandler}
            />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 my-4'>
          <div className=''>
            <div className=''>
              <label className='font-medium' htmlFor='type'>
                No of Sittings
              </label>
              <select
                id='type'
                className='my-2 p-3 w-full rounded-md bg-gray-700 placeholder: text-xs'
                onChange={inputHandler}
                name='no_of_sittings'
                required
              >
                <option>Select</option>
                <option value={10}>1</option>
                <option value={6}>2</option>
              </select>
            </div>
          </div>

          <div className=''>
            <div className=''>
              <label className='font-medium'>Select Category</label>
              <select
                className='my-2 p-3 w-full rounded-md bg-gray-700 placeholder: text-xs'
                name='category'
                required
                onChange={inputHandler}
              >
                <option>Select</option>
                <option value='UTME'>UTME</option>
                <option value='DE'>DE</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <h2 className='font-medium text-lg uppercase text-green-500 mt-10'>
        O Level Result Section
      </h2>
      <div className='my-5 bg-gray-900 bg-opacity-60 p-8 rounded-2xl grid-cols-2 grid gap-4'>
        <div className=''>
          <div className=''>
            <label className='font-medium'>Mathematics</label>
            <select
              className='my-2 p-3 w-full rounded-md bg-gray-700 placeholder: text-xs'
              onChange={inputHandler}
              name='maths'
              required
            >
              <SelectGrade />
            </select>
          </div>
        </div>

        <div className=''>
          <div className=''>
            <label className='font-medium'>English</label>
            <select
              className='my-2 p-3 w-full rounded-md bg-gray-700 placeholder: text-xs'
              onChange={inputHandler}
              name='eng'
              required
            >
              <SelectGrade />
            </select>
          </div>
        </div>

        <div className=''>
          <div className=''>
            <label className='font-medium'>Physics</label>
            <select
              className='my-2 p-3 w-full rounded-md bg-gray-700 placeholder: text-xs'
              onChange={inputHandler}
              name='phy'
              required
            >
              <SelectGrade />
            </select>
          </div>
        </div>

        <div className=''>
          <div className=''>
            <label className='font-medium'>Biology/Geography</label>
            <select
              className='my-2 p-3 w-full rounded-md bg-gray-700 placeholder: text-xs'
              onChange={inputHandler}
              name='bio'
              required
            >
              <SelectGrade />
            </select>
          </div>
        </div>

        <div className=''>
          <div className=''>
            <label className='font-medium'>Chemistry</label>
            <select
              className='my-2 p-3 w-full rounded-md bg-gray-700 placeholder: text-xs'
              onChange={inputHandler}
              name='chm'
              required
            >
              <SelectGrade />
            </select>
          </div>
        </div>
      </div>

      <h2 className='font-medium text-lg uppercase text-green-500 mt-10'>
        UTME/DE Section
      </h2>
      <div className='my-5 bg-gray-900 bg-opacity-60 p-8 rounded-2xl grid grid-cols-2 gap-4'>
        {user?.category === "UTME" ? (
          <div className=''>
            <div className=''>
              <label className='font-medium'>UTME Score</label>
              <input
                className='my-2 p-3 w-full rounded-md bg-gray-700 placeholder: text-xs'
                placeholder={0}
                type='number'
                onChange={inputHandler}
                name='utmeValue'
                max={400}
                required
              />
            </div>
          </div>
        ) : user?.category === "DE" ? (
          <>
            <div className=''>
              <div className=''>
                <label className='font-medium'>
                  Grade Total/Points obtainable
                </label>
                <input
                  placeholder={"e.g., 4.0"}
                  type='number'
                  onChange={inputHandler}
                  name='DETotal'
                  step='any'
                  className='my-2 p-3 w-full rounded-md bg-gray-700 placeholder: text-xs'
                  required
                />
              </div>
            </div>
            <div className=''>
              <div className=''>
                <label className='font-medium'>CGPA/Points Obtained</label>
                <input
                  className='my-2 p-3 w-full rounded-md bg-gray-700 placeholder: text-xs'
                  type='number'
                  step='any'
                  onChange={inputHandler}
                  name='DEValue'
                  required
                />
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className='my-10 bg-gray-900 bg-opacity-60 p-8 rounded-2xl '>
        {user?.category && (
          <div className='flex flex-col items-center justify-center'>
            <button className='bg-green-500 text-white p-3 px-10 rounded-xl'>
              Calculate Composite
            </button>
            <h3 className='my-5 text-lg font-medium text-center'>
              Hello {user?.name}, your composite for {user?.course} is{" "}
              <span className='text-4xl'>{composite}%</span>
            </h3>
          </div>
        )}
      </div>
    </form>
  );
};

export default Form;
