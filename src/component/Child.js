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
  onChanges = (event) => {
    this.setState({ item: event.target.value });
  };

  onSubmits = () => {
    const newList = [...this.state.itemList, this.state.item];
    this.setState({
      itemList: newList
    });
  };

  render() {
    const listItem = this.state.itemList.map((item) => <Element text={item} />);
    return (
      <div className="App">
        <input
          className="inputField"
          placeholder="Write here"
          value={this.state.item}
          onChange={this.onChanges}
        />
        <br />
        <br />
        <button className="addNew" onClick={this.onSubmits}>
          +
        </button>
        <br />
        <br />
        <ul className="grid-container">{listItem}</ul>
      </div>
    );
  }
}

export default Child;
