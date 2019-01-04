import React, { Component } from "react";
import Header from "./Header";
import CounterList from "./CounterList"

class App extends Component {

  state = {
    counters: 3
  }

  increaseCounters = () => {
    let counter = this.state.counters + 1;
    console.log("clicked")
    this.setState({
        counters: counter
    });
  }

  decreaseCounters = () => {
    let counter = this.state.counters - 1;

    this.setState({
        counters: counter
    });
  }

  render() {
    return (
      <div className="App">
        <Header decrease={this.decreaseCounters} increase={this.increaseCounters} />
        <CounterList counter={this.state.counters} />
      </div>
    );
  }
  
  
}



export default App;