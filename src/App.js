import React from "react";

class App extends React.Component {
  state = {
    number: 0,
  };
  add = () => {
    this.setState({ number: this.state.number + 1 });
    console.log("+");
  };
  subtract = () => {
    console.log("-");
    this.setState({ number: this.state.number - 1 });
  };
  render() {
    return (
      <div>
        <button onClick={this.add}>add</button>
        <button onClick={this.subtract}>minus</button>
        <h1>HELLO the number is {this.state.number}</h1>;
      </div>
    );
  }
}

export default App;
