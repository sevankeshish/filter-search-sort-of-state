import { PureComponent } from "react";

class Pure extends PureComponent {
  render() {
    return <div>pure comp - {this.props.name}</div>;
  }
}
export default Pure;
