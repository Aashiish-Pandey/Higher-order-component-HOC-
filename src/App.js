import React, { Component } from "react";
import "./App.css";
import Counter from "./Component/Counter";
import HoverCounter from "./Component/HoverCounter";

class App extends Component {
  render() {
    return (
      <div>
        <Counter name = "Ashish" />
        <HoverCounter />
      </div>
    );
  }
}

export default App;
