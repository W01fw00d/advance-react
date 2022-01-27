import React from "react";

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
    <form onSubmit={onSubmit}>
      <LabeledInput
        id="inputA"
        label="Input A"
        value={stateInputA}
        onChange={setStateInputA}
      />
      <br />
      <LabeledInput
        id="inputB"
        label="Input B"
        value={stateInputB}
        onChange={setStateInputB}
      />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Component;
