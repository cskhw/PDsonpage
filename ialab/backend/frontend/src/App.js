
import React, { Component } from 'react';
import './App.scss';
import Nav from './components/nav'
import Header from './components/header'

export default class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Nav></Nav>
      </div>
    );
  }
}
