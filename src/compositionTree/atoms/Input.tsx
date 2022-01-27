import React from "react";

type Props = {
  id: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function Component({ id, value, onChange }: Props) {
  return <input id={id} name={id} value={value} onChange={onChange} />;
}

export default Component;
