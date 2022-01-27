import React from "react";

import Form from "../organisms/Form";

type Props = {
  stateInputA: string;
  stateInputB: string;
  setStateInputA: any;
  setStateInputB: any;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

function Component({
  stateInputA,
  stateInputB,
  setStateInputA,
  setStateInputB,
  onSubmit,
}: Props) {
  return (
    <>
      <h1> Props Tree Form</h1>
      <Form
        stateInputA={stateInputA}
        stateInputB={stateInputB}
        setStateInputA={setStateInputA}
        setStateInputB={setStateInputB}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default Component;
