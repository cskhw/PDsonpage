
import React, { Component } from 'react';
import './App.scss';
import Nav from './components/nav'

export default class App extends Component {
  state = { users:[]}
  componentDidMount(){
    fetch('/users')
    .then(res => res.json())
    .then(users => this.setState({ users }));
  }
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <ul>
          {this.state.users.map(user => <li key={user.id}> {user.username}</li>)}
          </ul>
      </div>
    );
  }
}
