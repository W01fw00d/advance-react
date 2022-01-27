import React from "react";

import Label from "../atoms/Label";
import Input from "../atoms/Input";

type Props = { id: string; label: string; value: string; onChange: any };

function Component({ id, label, value, onChange }: Props) {
  return (
    <>
      <Label id={id}>{label}</Label>
      <Input id={id} value={value} onChange={onChange} />
    </>
  );
}

export default Component;
