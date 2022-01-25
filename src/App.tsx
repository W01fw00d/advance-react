import React from "react";
import "./App.css";

// import ClassComponent from "./components/atoms/ClassComponent";
import UseStateForm from "./components/atoms/UseStateForm";
import UncontrolledForm from "./components/atoms/UncontrolledForm";

function App() {
  return (
    <div className="App">
      {/* <ClassComponent name="Gabriel" /> */}
      <UseStateForm />
      <UncontrolledForm />
    </div>
  );
}

export default App;
