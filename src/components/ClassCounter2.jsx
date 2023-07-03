import { Component } from "react";

class ClassCounter2 extends Component {
  state = { name: "", count: 0 };

  componentDidMount() {
    document.title = `clicked : ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.count) {
      console.log("update");
      document.title = `clicked ${this.state.count} times`;
    }
  }

  //   componentWillUnmount() {
  //     console.log("unmount");
  //   }

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.setState({ name: e.target.value })}
          type="text"
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          count : {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassCounter2;
