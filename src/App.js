import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
  };
  componentDidMount() {
    setTimeout(this.counter, 5000);
  }
  counter = () => {
    this.setState({ isLoading: false });
  };
  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <h1>{isLoading ? "Loading.." : "LOADED:D"}</h1>
      </div>
    );
  }
}

export default App;
