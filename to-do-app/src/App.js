
import React, { Component } from 'react';
import AddItems from './Component/add item/Additems';
import ToDoList from './Component/items/items'
import './index.css'
class App extends Component {
  state = {
    items: [
      { 'id': 1, 'name': 'Eslam', 'task': 'stady hard' },
      { 'id': 2, 'name': 'Qadri', 'task': 'call' },
      { 'id': 3, 'name': 'Ahmed', 'task': ' hard' }

    ]
  };
  deleteItems2 = (id) => {
    let items = this.state.items.filter((item) => {
      return item.id !== id
    })
    this.setState({ items: items })
  }
  delete_items = (id) => {
    let items = this.state.items;
    let i = items.findIndex(item => item.id === id);
    items.splice(i, 1);
    this.setState({ items: items })
  }
  add_items = (item) => {
    item.id=Math.random()
    let items = this.state.items;
    items.push(item);
   // console.log(items)
    this.setState({ items: items });
  }
  render() {
    return (
      <div className="App contener" >
        <h2 className="Text-center">to do app</h2>
        <ToDoList items={this.state.items} deletei={this.deleteItems2} />

        <AddItems add_items={this.add_items} />
      </div>
    );
  }
}

export default App;
