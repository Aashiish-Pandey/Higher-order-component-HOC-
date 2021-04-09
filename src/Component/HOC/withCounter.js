import React, { Component } from "react";

const UpdatedComponent = (OrigianlComponent,incrementNo) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementCount = () =>
      this.setState((prevState) => {
        return { count: prevState.count + incrementNo };
      });
    render() {
      return (
        <OrigianlComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }

  return NewComponent;
};

export default UpdatedComponent;
