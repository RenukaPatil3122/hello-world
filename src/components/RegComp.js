import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("Reg Component render");
    return <div>Reg Comp {this.props.name}</div>;
  }
}

export default RegComp;
