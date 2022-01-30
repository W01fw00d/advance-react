import React from "react";

type Props = { name?: string };

type State = { date: Date; constructorData: string };

class ClassComponent extends React.Component<Props, State> {
  timerId: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      date: new Date(),
      constructorData: "This data was set on the constructor only",
    };
    this.timerId = null;
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    console.log("Component Did Update!");
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  shouldComponentUpdate() {
    return true;
    // return false; // This will stop rerenders
  }

  // There are more lifecycle event functions, but they are not used so much

  tick() {
    this.setState({
      date: new Date(),
    });
    console.log({
      // In Class Conponents, this.setState does a shallow merge of the previous state and the new
      // When dealing with state objects like in this case, that means that
      // you don't overwrite constructor data
      constructorData: this.state.constructorData,
    });
  }

  render() {
    // Called each time an update happens
    return (
      <div>
        <h1>Hello, {this.props.name}, this is a Class Component</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default ClassComponent;
