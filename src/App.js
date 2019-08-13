import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({
      count: current.count + 1
    }));
  };

  minus = () => {
    this.setState(current => ({
      count: current.count - 1
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>The number is: {count}</h1>
        <button onClick={this.add}>+ Add</button>
        <button onClick={this.minus}>- Minus</button>
      </div>
    );
  }
}

export default App;
