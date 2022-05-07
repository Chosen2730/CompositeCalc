import React, { useState, useRef } from "react";
import "./App.css";
import Heading from "./header";
import Form from "./form";

const App = () => {
  const [category, setCategory] = useState("");
  const compositeContainer = useRef(null);
  const [user, setUser] = useState({
    name: "",
    examCategory: "",
    mathsValue: 0,
    englishValue: 0,
    biologyValue: 0,
    physicsValue: 0,
    chemValue: 0,
    putmeValue: 0,
    utmeValue: 0,
    DETotal: 0,
    DEValue: 0,
    composite: 0,
    showComposite: false,
  });

  return (
    <>
      <Heading />
      <Form
        setCategory={setCategory}
        category={category}
        user={user}
        setUser={setUser}
        compositeContainer={compositeContainer}
      />
    </>
  );
};

export default App;
