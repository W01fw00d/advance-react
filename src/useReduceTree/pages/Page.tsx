import React, { useState, useReducer } from "react";

import MyContext from "../MyContext";

import Template from "../templates/Template";

function Component() {
  const [stateInputA, setStateInputA] = useState<string>("Value A");
  const [stateInputB, setStateInputB] = useState<string>("Value B");

  const literals: any = {
    en: {
      title: "useReduce Tree Form",
      submit: "Submit",
    },
    es: {
      title: "Formulario del Árbol con useReduce",
      submit: "Enviar",
    },
  };

  const initialState = { language: "en", literals: literals.en };

  function reducer(state: any, action: any) {
    switch (action.type) {
      case "en":
        return { language: "en", literals: literals.en };
      case "es":
        return { language: "es", literals: literals.es };
      default:
        throw new Error();
    }
  }

  const [stateLiterals, dispatchLiterals] = useReducer(reducer, initialState);

  const onSubmit = (event: any) => {
    event.preventDefault();
    console.log({ stateInputA: stateInputA, stateInputB: stateInputB });
  };

  return (
    <MyContext.Provider value={stateLiterals}>
      <Template
        stateInputA={stateInputA}
        stateInputB={stateInputB}
        setStateInputA={(event: any) => setStateInputA(event.target.value)}
        setStateInputB={(event: any) => setStateInputB(event.target.value)}
        onSubmit={onSubmit}
        handleChange={(event: any) =>
          dispatchLiterals({ type: event.target.value })
        }
      />
    </MyContext.Provider>
  );
}

export default Component;
