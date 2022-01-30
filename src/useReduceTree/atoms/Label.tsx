import React from "react";

type Props = { id: string; children: any };

function Component({ id, children }: Props) {
  return <label htmlFor={id}>{children}</label>;
}

export default Component;
