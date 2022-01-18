import { Component, Fragment } from "react";

class Element extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <li className="li">{this.props.element}</li>
        </Fragment>
      </div>
    );
  }
}
export default Element;
