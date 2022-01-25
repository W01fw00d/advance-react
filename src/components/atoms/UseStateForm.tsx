import React, { useState } from "react";

type State = { inputA?: string; inputB?: string };

function UseStateForm() {
  const [state, setState] = useState<State>({ inputA: "", inputB: "" });

  const onChange = (event: any) => {
    const target = event.target;

    /* setState({
      // This will overwrite the value of the other input state
      // Making it uncontrolled in the process
      // This is because useState.setState Hook doesn't merge state
      // like the ClassComponent.setState
      [target.id]: target.value,
    });
    */

    // setState({ ...state, [target.id]: target.value }); // Not recommended

    setState((prevState) => ({
      // This is the recommended way of updating state, passing a function
      // Because state may be updated asynchronously,
      // you should not rely on their values for calculating the next state.
      ...prevState,
      [target.id]: target.value,
    }));

    console.log({ "state.inputA": state.inputA, "state.inputB": state.inputB });
  };

  return (
    <div>
      Input A: <input id="inputA" value={state.inputA} onChange={onChange} />
      Input B: <input id="inputB" value={state.inputB} onChange={onChange} />
    </div>
  );
}

export default UseStateForm;
