import { Component, Fragment } from "react";

class Element extends Component {
  render() {
    return (
      <Fragment>
        <li className="li">{this.props.element}</li>
      </Fragment>
    );
  }
}
export default Element;
