import { Component } from "react";
import Element from "./component/Element.js";
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      itemList: []
    };
  }
  render() {
    const items = this.state.itemList.map((element) => (
      <Element element={element} />
    ));
    return (
      <div>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default Child;
