import React, { Component } from "react";
import "./App.css";
import {CardList} from './components/card-lsit/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };   
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }
  render() {
    return (
      <div className="App">
        <CardList name="ritheesh">
        {this.state.monsters.map((monsters) => (
          <h1 key={monsters.id}>{monsters.name}</h1>
        ))}
        </CardList>
      </div>
    );
  }
}

export default App;
