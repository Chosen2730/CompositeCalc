import React from "react";
import SelectGrade from "./Gradeselect";

const form =({subject, setInputText, inputText, 
    utmeScore, setUTMEScore, postUTMEScore, 
    setPostUTMEScore, 
    gradevalue1, setGradeValue1, 
    gradevalue2, setGradeValue2, 
    gradevalue3, setGradeValue3, 
    gradevalue4, setGradeValue4, 
    gradevalue5, setGradeValue5, 
    composite, setComposite,
    DEvalue, setDEvalue,
    DEinput, setDEinput})=>{


    const inputHandler = (e)=>{
        setInputText(e.target.value);
    }
    const utmeInput = (e)=>{
        setUTMEScore(e.target.value);
    }
    const postUtmeInput = (e)=>{
        setPostUTMEScore(e.target.value)
    }
    const calcGrade = ()=>{
        const Olevel = ((Number(gradevalue1) + Number(gradevalue2) + Number(gradevalue3) + 
        Number(gradevalue4) + Number(gradevalue5))/30)*20;
        const UTME = Number(utmeScore)/8;
        const PUTME = ((Number(postUTMEScore))/100)*30;
        // const DEVALUE = Number((DEvalue/DEinput)*50);
        return (UTME + PUTME + Olevel).toFixed(2);
    }
    const clickHandler = e =>{
        e.preventDefault();
        calcGrade();
        setComposite(calcGrade);
    }
    const clearHandler = e =>{
        // e.preventDefault();
        // // setUTMEScore(0);
        // // setPostUTMEScore(0);
        // // setInputText("User");
        // // setGradeValue1(0);
        // // setGradeValue2(0);
        // // setGradeValue3(0);
        // // setGradeValue4(0);
        // // setGradeValue5(0);
        // // setComposite(0);
    }
    const gradeAction = e=>{
       setGradeValue1(e.target.value);
    }
    const gradeAction1 = e=>{
        setGradeValue2(e.target.value);
     }
     const gradeAction2 = e=>{
        setGradeValue3(e.target.value);
     }
     const gradeAction3 = e=>{
        setGradeValue4(e.target.value);
     }
     const gradeAction4 = e=>{
        setGradeValue5(e.target.value);
     }
    //  const DEaction = e =>{
    //      setDEvalue(e.target.value);
    //  }
    //  const DEinputHandler=e=>{
    //      setDEinput(e.target.value);
    //  }
     
    return(
        <>
        <form>
            <div className='form-flex'>
                <div className='form-col label'>
                    <label>Username</label>
                </div>
                <div className='form-col input'>
                    <input placeholder='Enter Username' onChange={inputHandler} type='text'></input>
                </div>
            </div>
            <div className='form-flex'>
                <div className='form-col label'>
                    <label>Exam Type</label>
                </div>
                <div className='form-col input'>
                   <select>
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
                <select onChange={gradeAction} >
                       <SelectGrade/>
                   </select>
                </div>   
            </div>
            <div className='form-flex'>
            <div className='form-col label'>
                    <label className='selectLabel'>English</label>
                </div>
                <div className='form-col input'>
                <select onChange={gradeAction1} >
                <SelectGrade/>
                   </select>
                </div>
            </div>
            <div className='form-flex'>
            <div className='form-col label'>
                    <label className='selectLabel'>Physics</label>
                </div>
                <div className='form-col input'>
                <select onChange={gradeAction2} >
                <SelectGrade/>
                   </select>
                </div>
            </div>
            <div className='form-flex'>
                <div className='form-col label'>
                    <label className='selectLabel'>Biology</label>
                </div>
                <div className='form-col input'>
                <select onChange={gradeAction3} >
                <SelectGrade/>
                   </select>
                </div>
            </div>
            <div className='form-flex'>
            <div className='form-col label'>
                    <label className='selectLabel'>Chemistry</label>
                </div>
                <div className='form-col input'>
                <select onChange={gradeAction4} >
                <SelectGrade/>
                   </select>
                </div>
            </div>
            <div className='form-flex'>
                <div className='form-col label'>
                    <label>Post UTME score</label>
                </div>
                <div className='form-col input'>
                    <input placeholder={0} onChange={postUtmeInput} type='number'></input>
                </div>
            </div>

            {/* <h1 className='category'>For UTME candidates Only</h1> */}
            <div className='form-flex'>
                <div className='form-col label'>
                    <label>UTME Score</label>
                </div>
                <div className='form-col input'>
                    <input placeholder={0}  onChange={utmeInput} type='number'></input>
                </div>
            </div>

            {/* <h1 className='category'>For Direct Entry candidates Only</h1>
            <div className='form-flex'>
                <div className='form-col label'>
                    <label>Grade Total/Points obtainable</label>
                </div>
                <div className='form-col input'>
                <input placeholder={"4.0"} type='number' onChange={DEaction}></input>
                </div>
            </div>
            <div className='form-flex'>
                <div className='form-col label'>
                    <label>CGPA/Points Obtained</label>
                </div>
                <div className='form-col input'>
                    <input onChange={DEinputHandler} type='number'></input>
                </div>
            </div> */}
            <div className='submit'>
            <button onClick={clickHandler}>Calculate Composite</button> 
            <button className="clear" onClick={clearHandler}>Clear</button>
            <h3 className='result'>Hello {inputText}, your composite is <span> {composite} points.</span></h3>
            </div>
        </form>
        </>
    )
}

export default form;