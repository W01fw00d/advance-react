import React, { useState } from "react";

import Template from "../templates/Template";

function Component() {
  const [stateInputA, setStateInputA] = useState<string>("Value A");
  const [stateInputB, setStateInputB] = useState<string>("Value B");

  const onSubmit = (event: any) => {
    event.preventDefault();
    console.log({ stateInputA: stateInputA, stateInputB: stateInputB });
  };

  return (
    <Template
      stateInputA={stateInputA}
      stateInputB={stateInputB}
      setStateInputA={(event: any) => setStateInputA(event.target.value)}
      setStateInputB={(event: any) => setStateInputB(event.target.value)}
      onSubmit={onSubmit}
    />
  );
}

export default Component;
