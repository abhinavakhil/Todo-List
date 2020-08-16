import React from "react";

import "./App.css";
import ListItems from "./ListItems";

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItems: {
        text: "",
        key: "",
      },
    };

    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItems = this.deleteItems.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  // add item
  handleInput(e) {
    this.setState({
      currentItems: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  addItem(e) {
    // page gets refreshed everytime we click a btn (its default behaviour of btn)
    e.preventDefault();
    const newItem = this.state.currentItems;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItems: {
          text: "",
          key: "",
        },
      });
    }
  }

  deleteItems(key) {
    const filterItems = this.state.items.filter((item) => item.key != key);
    this.setState({ items: filterItems });
  }

  setUpdate(text, key) {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({ items: items });
  }

  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter Text"
              value={this.state.currentItems.text}
              onChange={this.handleInput}
            />
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems
          items={this.state.items}
          deleteItems={this.deleteItems}
          setUpdate={this.setUpdate}
        />
      </div>
    );
  }
}

export default App;
