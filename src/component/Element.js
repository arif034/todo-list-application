import React from "react";

class Element extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <React.Fragment>
        <li className="li">{item}</li>
      </React.Fragment>
    );
  }
}
export default Element;
