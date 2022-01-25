import React, { useRef } from "react";

function UseStateForm() {
  const inputARef = useRef<any>();
  const inputBRef = useRef<any>();

  const onSubmit = (event: any) => {
    event.preventDefault();
    console.log({
      "inputARef.current": inputARef.current.value,
      "inputBRef.current": inputBRef.current.value,
    });
  };

  return (
    <>
      <h1> Uncontrolled Form</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="inputA">Input A:</label>
        <input name="inputA" defaultValue="Value A" ref={inputARef} />
        <br />
        <label htmlFor="inputB">Input B:</label>
        <input name="inputB" defaultValue="Value B" ref={inputBRef} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default UseStateForm;
