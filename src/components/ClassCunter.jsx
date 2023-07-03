import React, { Component } from "react";

class ClassCounter extends Component {
  state = {
    count: 0,
  };

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(id) {
    console.log(id);
    this.setState({ count: this.state.count + 1 });
  }

  // clickHandler = () => {
  //   this.setState((prevState) => {
  //     return { count: prevState.count + 1 };
  //   });
  // };

  // clickHandler3 = () => {
  //   this.setState((prevState) => {
  //     return { count: prevState.count + 3 };
  //   });
  // };

  // clickHandler5 = () => {
  //   this.setState((prevState) => {
  //     return { count: prevState.count + 5 };
  //   });
  // };

  render() {
    return (
      <>
        <p>counter : {this.state.count}</p>
        <button onClick={this.clickHandler.bind(this, 2)}>add one</button>
        {/* <button onClick={() => this.clickHandler(2)}>add one</button> */}
        {/* <button onClick={this.clickHandler3}>add three</button>
        <button onClick={this.clickHandler5}>add five</button> */}
      </>
    );
  }
}

export default ClassCounter;
