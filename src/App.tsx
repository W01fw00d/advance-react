import React from "react";
import "./App.css";

// import ClassComponent from "./components/atoms/ClassComponent";
// import UncontrolledForm from "./components/atoms/UncontrolledForm";
import UseStateForm from "./components/atoms/UseStateForm";

function App() {
  return (
    <div className="App">
      <h1> Some React Concepts examples </h1>
      {/* <ClassComponent name="Gabriel" /> */}
      {/* <UncontrolledForm /> */}
      <UseStateForm />
    </div>
  );
}

export default App;
