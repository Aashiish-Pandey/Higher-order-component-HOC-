import React, { Component } from "react";

const UpdatedComponent = (OrigianlComponent) => {
  class NewComponent extends Component {
    render() {
      return <OrigianlComponent name="ashish" />;
    }
  }

  return NewComponent;
};

export default UpdatedComponent;
