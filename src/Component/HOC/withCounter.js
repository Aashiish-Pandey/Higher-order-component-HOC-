import React, { Component } from "react";

const UpdatedComponent = (OrigianlComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementCount = () =>
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    render() {
      return (
        <OrigianlComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }

  return NewComponent;
};

export default UpdatedComponent;
