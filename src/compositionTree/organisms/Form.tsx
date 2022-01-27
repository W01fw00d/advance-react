import React from "react";

import LabeledInput from "../molecules/LabeledInput";

type Props = {
  inputs: any[];
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

function Component({ inputs, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit}>
      {inputs}
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Component;
