import React, {useState} from 'react';
import './App.css';
import Heading from './header';
import Form from './form'

const App = ()=> {
const [inputText, setInputText]=useState("User");
const [utmeScore, setUTMEScore]=useState("");
const [postUTMEScore, setPostUTMEScore]=useState("");
const [gradeValue1, setGradeValue1]=useState(0);
const [gradeValue2, setGradeValue2]=useState(0);
const [gradeValue3, setGradeValue3]=useState(0);
const [gradeValue4, setGradeValue4]=useState(0);
const [gradeValue5, setGradeValue5]=useState(0);
const [DEvalue, setDEvalue]=useState(0);
const [DEinput, setDEinput]=useState(0);

const [composite, setComposite]=useState(0);

  return (
  <>
  <Heading/>
  <Form 
  setInputText={setInputText} 
  inputText={inputText}
  utmeScore ={utmeScore}
  setUTMEScore = {setUTMEScore}
  postUTMEScore = {postUTMEScore}
  setPostUTMEScore = {setPostUTMEScore}
  gradevalue1 = {gradeValue1}
  setGradeValue1 = {setGradeValue1}
  gradevalue2 = {gradeValue2}
  setGradeValue2 = {setGradeValue2}
  gradevalue3 = {gradeValue3}
  setGradeValue3 = {setGradeValue3}
  gradevalue4 = {gradeValue4}
  setGradeValue4 = {setGradeValue4}
  gradevalue5 = {gradeValue5}
  setGradeValue5 = {setGradeValue5}
  composite = {composite}
  setComposite = {setComposite}
  DEinput = {DEinput}
  setDEinput = {setDEinput}
  DEvalue = {DEvalue}
  setDEvalue = {setDEvalue} 
  />
  </>
  );
}

export default App;
