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
    composite, setComposite})=>{


    const inputHandler = (e)=>{
        setInputText(e.target.value);
    }
    const utmeInput = (e)=>{
        setUTMEScore(e.target.value);
    }
    const postUtmeInput = (e)=>{
        setPostUTMEScore(e.target.value)
    }
    const clickHandler = e =>{
        e.preventDefault();
        calcGrade();
        setComposite(calcGrade)
    }
    const calcGrade = ()=>{
        return ((Number(utmeScore))/8 + ((Number(postUTMEScore))/100)*30 + 
        ((Number(gradevalue1) + Number(gradevalue2) + Number(gradevalue3) + 
        Number(gradevalue4) + Number(gradevalue5))/30)*20).toFixed(2);     ;
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
   
    return(
        <>
        <form>
            <div className='form-flex'>
                <div className='form-col label'>
                    <label>Username</label>
                </div>
                <div className='form-col input'>
                    <input onChange={inputHandler} type='text'></input>
                </div>
            </div>
            <div className='form-flex'>
                <div className='form-col label'>
                    <label>UTME Score</label>
                </div>
                <div className='form-col input'>
                    <input onChange={utmeInput} type='number'></input>
                </div>
            </div>
            <div className='form-flex'>
                <div className='form-col label'>
                    <label>Post UTME score</label>
                </div>
                <div className='form-col input'>
                    <input onChange={postUtmeInput} type='number'></input>
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
            <div className='submit'>

            <button onClick={clickHandler}>Calculate</button>
            <h3 className='description'>Hello {inputText}, your composite is {composite} points.</h3>
            </div>
        </form>
        </>
    )
}

export default form;