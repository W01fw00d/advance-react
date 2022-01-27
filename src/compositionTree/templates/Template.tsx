import React, { Fragment } from "react";

import Form from "../organisms/Form";
import LabeledInput from "../molecules/LabeledInput";

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
      <h1> Composition Tree Form</h1>
      <Form
        inputs={[
          <Fragment key="inputA">
            <LabeledInput
              id="inputA"
              label="Input A"
              value={stateInputA}
              onChange={setStateInputA}
            />
            <br />
          </Fragment>,
          <Fragment key="inputB">
            <LabeledInput
              id="inputB"
              label="Input B"
              value={stateInputB}
              onChange={setStateInputB}
            />
            <br />
          </Fragment>,
        ]}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default Component;
