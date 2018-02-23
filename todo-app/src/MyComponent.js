
import React, { Component } from 'react';
import './App.css';
import List from './List';

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        term: '',
        items: []
      };
    }

    onChange = (event) => {
        this.setState({term: event.target.value});
      }

      onSubmit = (event) => {
        event.preventDefault()
        this.setState({
          term: '',
          items: [...this.state.items, this.state.term]
        });
      }

    render() {
        return (
          <div></div>
        );
      }
    }