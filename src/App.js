import React, { Component } from 'react';
import './App.css';
import logo from './public/rootlogo.png'
import Nav from './components/nav'
import Main from './components/main'
import Login from './components/login'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <input type="button" value="로그인"></input>
        <a href="undefined"><img src={logo} alt="logo"></img></a>
        <Nav></Nav>
      </div>
    );
  }
}
