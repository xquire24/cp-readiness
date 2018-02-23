import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo List Application</h1>
        </header>
        <p className="App-intro">
        <MyComponent/>
        </p>
      </div>
    );
  }
}

export default App;
