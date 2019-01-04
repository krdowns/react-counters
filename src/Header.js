import React, { Component } from "react";
import ContainerList from './CounterList';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">React Counters</h1>
        <button onClick={this.props.decrease}>-</button>
        <button onClick={this.props.increase}>+</button>
      </header>
    );
  }
}

export default Header;
