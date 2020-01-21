import React, { Component } from 'react';


export default class Login extends Component {
    state = {
        id: '',
        pw: ''
      }
      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
      handleClick = (e) => {
        alert(this.state.id + this.state.pw)
      }
      render() {
        return (
          <form>
              <fieldset><legend>로그인</legend>
            아이디<input
              placeholder="ID"
              value={this.state.id}
              onChange={this.handleChange}
              name="id"
            /><br></br>
            비밀번호<input
              placeholder="PW"
              value={this.state.pw}
              onChange={this.handleChange}
              name="pw"
            /><br></br>
            <button onClick={this.handleClick}>로그인</button>
            </fieldset>
          </form>
        );
      }
    }