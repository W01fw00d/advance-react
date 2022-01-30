import React, { useContext } from "react";

import MyContext from "../MyContext";

type Props = {
  inputs: any[];
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

function Component({ inputs, onSubmit }: Props) {
  const { literals } = useContext<any>(MyContext); // "Consumer"

  return (
    <>
      <h1>{literals.title}</h1>
      <form onSubmit={onSubmit}>
        {inputs}
        <input type="submit" value={literals.submit} />
      </form>
    </>
  );
}

export default Component;
