import React from "react";
import SelectGrade from "./Gradeselect";

const Form = ({ setCategory, category, user, setUser, compositeContainer }) => {
  const {
    name,
    examCategory,
    putmeValue,
    utmeValue,
    DETotal,
    DEValue,
    mathsValue,
    englishValue,
    biologyValue,
    physicsValue,
    chemValue,
    composite,
    showComposite,
  } = user;
  const changeCategory = (e) => {
    setCategory(e.target.value);
  };
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
    const allValues = [
      mathsValue,
      chemValue,
      englishValue,
      physicsValue,
      biologyValue,
      putmeValue,
      utmeValue,
      DETotal,
      DEValue,
    ];
    const values = allValues.map((value) => {
      return Number(value);
    });
    const [m, c, en, p, b, putme, utme, dt, d] = values;
    const OlevelTotal = ((m + c + en + p + b) / 30) * 20;
    const utmeTotal = utme / 8;
    const putmeTotal = (putme / 100) * 30;
    const deTotal = (d / dt) * 50;
    if (category === "DE") {
      const total = (OlevelTotal + putmeTotal + deTotal).toFixed(2);
      setUser({ ...user, composite: total, showComposite: true });
    } else if (category === "UTME") {
      const total = (OlevelTotal + utmeTotal + putmeTotal).toFixed(2);
      setUser({ ...user, composite: total, showComposite: true });
    } else {
      setUser({ ...user, composite: 0, showComposite: false });
    }
  };
  return (
    <>
      <form>
        <div className='form-flex'>
          <div className='form-col label'>
            <label htmlFor='userName'>Username</label>
          </div>
          <div className='form-col input'>
            <input
              placeholder='Enter Username'
              name='name'
              type='text'
              id='userName'
              value={name}
              onChange={inputHandler}
            ></input>
          </div>
        </div>
        <div className='form-flex'>
          <div className='form-col label'>
            <label htmlFor='type'>Exam Type</label>
          </div>
          <div className='form-col input'>
            <select
              id='type'
              onChange={inputHandler}
              name='examCategory'
              value={examCategory}
            >
              <option>WAEC</option>
              <option>NECO</option>
            </select>
          </div>
        </div>
        <div className='form-flex'>
          <div className='form-col label'>
            <label className='selectLabel'>Mathematics</label>
          </div>
          <div className='form-col input'>
            <select onChange={inputHandler} name='mathsValue'>
              <SelectGrade />
            </select>
          </div>
        </div>
        <div className='form-flex'>
          <div className='form-col label'>
            <label className='selectLabel'>English</label>
          </div>
          <div className='form-col input'>
            <select onChange={inputHandler} name='englishValue'>
              <SelectGrade />
            </select>
          </div>
        </div>
        <div className='form-flex'>
          <div className='form-col label'>
            <label className='selectLabel'>Physics</label>
          </div>
          <div className='form-col input'>
            <select onChange={inputHandler} name='physicsValue'>
              <SelectGrade />
            </select>
          </div>
        </div>
        <div className='form-flex'>
          <div className='form-col label'>
            <label className='selectLabel'>Biology</label>
          </div>
          <div className='form-col input'>
            <select onChange={inputHandler} name='biologyValue'>
              <SelectGrade />
            </select>
          </div>
        </div>
        <div className='form-flex'>
          <div className='form-col label'>
            <label className='selectLabel'>Chemistry</label>
          </div>
          <div className='form-col input'>
            <select onChange={inputHandler} name='chemValue'>
              <SelectGrade />
            </select>
          </div>
        </div>
        <div className='form-flex'>
          <div className='form-col label'>
            <label>Post UTME score</label>
          </div>
          <div className='form-col input'>
            <input
              placeholder={0}
              type='number'
              onChange={inputHandler}
              name='putmeValue'
            ></input>
          </div>
        </div>
        <div className='form-flex'>
          <div className='form-col label'>
            <label className='selectLabel'>Select Category</label>
          </div>
          <div className='form-col input'>
            <select onChange={changeCategory}>
              <option>UTME/DE</option>
              <option value='UTME'>UTME</option>
              <option value='DE'>DE</option>
            </select>
          </div>
        </div>
        {category === "UTME" ? (
          <div className='form-flex'>
            <div className='form-col label'>
              <label>UTME Score</label>
            </div>
            <div className='form-col input'>
              <input
                placeholder={0}
                type='number'
                onChange={inputHandler}
                name='utmeValue'
              ></input>
            </div>
          </div>
        ) : category === "DE" ? (
          <>
            <div className='form-flex'>
              <div className='form-col label'>
                <label>Grade Total/Points obtainable</label>
              </div>
              <div className='form-col input'>
                <input
                  placeholder={"e.g., 4.0"}
                  type='number'
                  onChange={inputHandler}
                  name='DETotal'
                ></input>
              </div>
            </div>
            <div className='form-flex'>
              <div className='form-col label'>
                <label>CGPA/Points Obtained</label>
              </div>
              <div className='form-col input'>
                <input
                  type='number'
                  onChange={inputHandler}
                  name='DEValue'
                ></input>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        {category && (
          <div className='submit'>
            <button onClick={calculate}>Calculate Composite</button>
            {showComposite && (
              <h3 className='result'>
                Hello {name}, your composite is{" "}
                <span ref={compositeContainer}>{composite}</span> points.
              </h3>
            )}
          </div>
        )}
      </form>
    </>
  );
};

export default Form;
