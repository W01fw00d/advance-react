import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./HomePage";
import ClassComponent from "./components/atoms/ClassComponent";
import UncontrolledForm from "./components/atoms/UncontrolledForm";
import UseStateForm from "./components/atoms/UseStateForm";
import PropsTreePage from "./propsTree/pages/Page";
import CompositionTreePage from "./compositionTree/pages/Page";
import ContextTreePage from "./contextTree/pages/Page";
import UseReduceTreePage from "./useReduceTree/pages/Page";
// import FullyCentered from "./components/atoms/FullyCentered";

function App() {
  const exampleList = [
    {
      path: "ClassComponent",
      element: <ClassComponent name="Gabriel" />,
    },
    { path: "UncontrolledForm", element: <UncontrolledForm /> },
    { path: "UseStateForm", element: <UseStateForm /> },
    { path: "PropsTreePage", element: <PropsTreePage /> },
    { path: "CompositionTreePage", element: <CompositionTreePage /> },
    { path: "ContextTreePage", element: <ContextTreePage /> },
    { path: "UseReduceTreePage", element: <UseReduceTreePage /> },
    /* { path: "FullyCentered", element: <FullyCentered /> }, */
  ];

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage pathList={exampleList.map((example) => example.path)} />
          }
        />
        {exampleList.map((example) => (
          <Route
            key={example.path}
            path={example.path}
            element={example.element}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
