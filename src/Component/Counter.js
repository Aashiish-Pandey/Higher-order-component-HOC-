import React, { Component } from "react";
import UpdatedComponent from "./HOC/withCounter";

class Counter extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.incrementCount()}>
          Clicked {this.props.count} times
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(Counter);
