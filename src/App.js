import React from "react";
import Heading from "./header";
import Form from "./form";

const App = () => {
  return (
    <div className='p-5 py-20'>
      <div className='max-w-4xl mx-auto'>
        <Heading />
        <Form />
      </div>
    </div>
  );
};

export default App;
