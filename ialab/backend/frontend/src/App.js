
import React, { Component } from 'react';
import './App.scss';
import Nav from './components/nav'
import Header from './components/header'
import {CookiesProvider} from 'react-cookie'


export default class App extends Component {
  render() {
    return (
        <CookiesProvider>
      <div className="App">
        <Header></Header>
        <Nav></Nav>
      </div>
        </CookiesProvider>
    );
  }
}
