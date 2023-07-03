import { Component } from "react";

class RegChild extends Component {
  render() {
    console.log("reg childdddddddddd");
    return <div>RegChild - {this.props.name}</div>;
  }
}

export default RegChild;
