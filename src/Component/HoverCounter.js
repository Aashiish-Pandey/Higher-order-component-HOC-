import React, { Component } from "react";

import UpdatedComponent from "./HOC/withCounter";

class HoverCounter extends Component {
  render() {
    return (
      <div>
        <h1 onMouseOver={() => this.props.incrementCount()}>
          Hovered {this.props.count} times
        </h1>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter);
