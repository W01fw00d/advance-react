import React, { useState } from "react";

import MyContext from "../MyContext";

import Template from "../templates/Template";

function Component() {
  const [stateInputA, setStateInputA] = useState<string>("Value A");
  const [stateInputB, setStateInputB] = useState<string>("Value B");
  const [stateLanguage, setStateLanguage] = useState<string>("en");

  const onSubmit = (event: any) => {
    event.preventDefault();
    console.log({ stateInputA: stateInputA, stateInputB: stateInputB });
  };

  const literals: any = {
    en: {
      title: "Context Tree Form",
      submit: "Submit",
    },
    es: {
      title: "Formulario del Árbol con Contexto",
      submit: "Enviar",
    },
  };

  return (
    <MyContext.Provider value={literals[stateLanguage]}>
      <Template
        stateInputA={stateInputA}
        stateInputB={stateInputB}
        setStateInputA={(event: any) => setStateInputA(event.target.value)}
        setStateInputB={(event: any) => setStateInputB(event.target.value)}
        onSubmit={onSubmit}
        language={stateLanguage}
        handleChange={(event: any) => setStateLanguage(event.target.value)}
      />
    </MyContext.Provider>
  );
}

export default Component;
