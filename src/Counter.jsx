import React from "react";

class Counter extends React.Component {
  handleOnIncrease() {
    console.info("On Increase");
  }

  handleOnDecrease() {
    console.info("On Decrease");
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOnIncrease}>Increase</button>|
        <button onClick={this.handleOnDecrease}>Decrease</button>
      </div>
    );
  }
}

export default Counter;
