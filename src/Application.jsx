import React from "react";
import Counter from "./Counter";
import Display from "./Display";

class Application extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Counter />
        </div>
        <div>
          <Display count={3} />
        </div>
      </div>
    );
  }
}

export default Application;
