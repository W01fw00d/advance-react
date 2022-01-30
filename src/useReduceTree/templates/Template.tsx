import React, { Fragment, useContext } from "react";

import Form from "../organisms/Form";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

import MyContext from "../MyContext";

type Props = {
  stateInputA: string;
  stateInputB: string;
  setStateInputA: any;
  setStateInputB: any;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  handleChange: any;
};

function Component({
  stateInputA,
  stateInputB,
  setStateInputA,
  setStateInputB,
  onSubmit,
  handleChange,
}: Props) {
  const contextData = useContext<any>(MyContext);

  const inputsData = {
    a: {
      id: "inputA",
      label: "Input A",
      value: stateInputA,
      onChange: setStateInputA,
    },
    b: {
      id: "inputB",
      label: "Input B",
      value: stateInputB,
      onChange: setStateInputB,
    },
  };

  return (
    <>
      <Form
        inputs={[
          <Fragment key={inputsData.a.id}>
            <Label id={inputsData.a.id}>{inputsData.a.label}</Label>
            <Input
              id={inputsData.a.id}
              value={inputsData.a.value}
              onChange={inputsData.a.onChange}
            />
            <br />
          </Fragment>,
          <Fragment key={inputsData.b.id}>
            <Label id={inputsData.b.id}>{inputsData.a.label}</Label>
            <Input
              id={inputsData.b.id}
              value={inputsData.b.value}
              onChange={inputsData.b.onChange}
            />
            <br />
          </Fragment>,
        ]}
        onSubmit={onSubmit}
      />
      <br />
      <br />
      <select
        name="language"
        id="language"
        value={contextData.language}
        onChange={handleChange}
      >
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
    </>
  );
}

export default Component;
