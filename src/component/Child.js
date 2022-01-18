import { Component } from "react";
import Element from "./Element.js";
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      itemList: []
    };
  }
  onChange = (event) => {
    this.setState((prevState) => {
      return { item: event.target.value };
    });
  };

  onSubmit = (event) => {
    this.setState(() => {
      return {
        itemList: [...this.state.itemList, event.target.value]
      };
    });
  };
  render() {
    const items = this.state.itemList.map((element) => (
      <Element element={element} />
    ));
    return (
      <div>
        <input type="text" value={this.state.item} onChange={this.onChange} />
        <button onSubmit={this.onSubmit}>Submit</button>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default Child;
