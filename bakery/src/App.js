import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Add from "./components/Add";
import List from "./components/List";
import Pay from "./components/Pay";
import Button from "./components/Button";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: "Add",
      items: [],
    };
    this.selectAdd= this.selectAdd.bind(this);
    this.selectList= this.selectList.bind(this);
    this.selectPay= this.selectPay.bind(this);
    this.add = this.add.bind(this)
  }
  

  selectAdd = () => {
    this.setState({
      activeTab: "add",
    });
  };

  selectList = () => {
    this.setState({
      activeTab: "list",
    });
  };

  selectPay = () => {
    this.setState({
      activeTab: "pay",
    });
  };

  add(name, price) {
    const obj = {
      name: name,
      price: price
    }
    const newList = this.state.items
    newList.push(obj)
    this.setState({
      items: newList
    })
  }
  
  renderContent = () => {
    switch(this.state.activeTabs) {
      case 'add':
        return <Add addItem={this.add}></Add>
      case 'list':
        return <List listItems={this.state.items}></List>
      case 'pay':
        return <Pay></Pay>
    }
  }

  render() {
    return (
      <>
        <h1>Bakery</h1>
        <Button
          isSelected={this.state.activeTab === "Add"}
          handleClick={this.selectAdd}
        >
          Add
        </Button>
        <Button
          isSelected={this.state.activeTab === "List"}
          handleClick={this.selectList}
        >
          List
        </Button>
        <Button
          isSelected={this.state.activeTab === "Pay"}
          handleClick={this.selectPay}
        >
          Pay
        </Button>
        {this.renderContent()}
      </>
    );
  }
}

export default App;
