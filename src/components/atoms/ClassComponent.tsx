import React from "react";

type Props = { name?: string };

class ClassComponent extends React.Component<Props> {
  render() {
    return <h1>Hello, {this.props.name}, this is a Class Component</h1>;
  }
}

export default ClassComponent;
