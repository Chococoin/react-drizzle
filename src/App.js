import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <div className="App">
        <h1>Hola Mundo!</h1>
      </div>
    );
  }
}

export default App;
