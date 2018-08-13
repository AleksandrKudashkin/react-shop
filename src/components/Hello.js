import React, { Component } from "react";
import ShowAddition from "./ShowAddition";

class Red extends Component {
  render() {
    const children = this.props.children;
    return <span style={{ color: "red" }}>{children}</span>;
  }
}

class Hello extends Component {
  render() {
    return (
      <div>
        <p>
          Hello, <Red>World!</Red>
        </p>
        <p>
          Addition result: <ShowAddition a={2} b={7} />
        </p>
      </div>
    );
  }
}

export default Hello;
