import React from "react";
import "./App.css";

// import ClassComponent from "./components/atoms/ClassComponent";
// import UncontrolledForm from "./components/atoms/UncontrolledForm";
import UseStateForm from "./components/atoms/UseStateForm";
// import PropsTreePage from "./propsTree/pages/Page";
// import CompositionTreePage from "./compositionTree/pages/Page";
// import ContextTreePage from "./contextTree/pages/Page";
// import UseReduceTreePage from "./useReduceTree/pages/Page";
// import FullyCentered from "./components/atoms/FullyCentered";

function App() {
  return (
    <div className="App">
      {/* TODO: add React router here and try to find a way of creating pages dinamically for each example */}
      {/* <h1> Some React Concepts examples </h1> */}
      {/* <ClassComponent name="Gabriel" /> */}
      {/* <UncontrolledForm /> */}
      <UseStateForm />
      {/* <PropsTreePage /> */}
      {/* <CompositionTreePage /> */}
      {/* <ContextTreePage /> */}
      {/* <UseReduceTreePage /> */}
      {/* <FullyCentered /> */}
    </div>
  );
}

export default App;
