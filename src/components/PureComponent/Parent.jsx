import { Component, PureComponent } from "react";
import MemoComp from "./MemoFunc";
import Pure from "./PureComponent";
import RegChild from "./RegChild";

class Parent extends Component {
  state = {
    name: "sevan",
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "sevan" });
    }, 1000);
  }

  render() {
    console.log("parenttttttttttttttt");
    return (
      <div>
        Parents component
        {/* <RegChild name={this.state.name} /> */}
        <Pure name={this.state.name} />
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default Parent;
