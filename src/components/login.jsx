import React, { Component } from 'react';
import { connect } from 'react-redux';
import { render } from '@testing-library/react';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      auth: 'false',
      ischecked: false
    }
  }
  componentDidMount() {
    if(this.props.userid === localStorage.getItem('id') && localStorage.getItem('pw')){
      console.log('success')
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleClick = (e) => {
    if (this.state.id === this.props.userid && this.state.pw === this.props.userpw) {
      alert('true')
      this.setState({ auth: 'true' });
      sessionStorage.setItem('id', this.state.id);
      sessionStorage.setItem('pw', this.state.pw);
      sessionStorage.setItem('auth', 'true');
      console.log(this.state.ischecked)
      if (this.state.ischecked) {
        localStorage.setItem('id', this.state.id)
        localStorage.setItem('pw', this.state.pw)
      }
    }
    else {
      (alert(this.state.auth))
      this.setState({ auth: 'false' });
      window.sessionStorage.setItem('auth', 'false');

    }
  }
  ischeck = (e) => {
    this.setState({ ischecked: !this.state.ischecked })
    
  }
  render() {

    return (
      <form action="/">
        <span>세션아이디: {sessionStorage.getItem('id')}</span><br></br>
        <span>세션비밀번호: {sessionStorage.getItem('id')}</span><br></br>
        <span>로컬아이디: {localStorage.getItem('id')}</span><br></br>
        <span>로컨비밀번호: {localStorage.getItem('pw')}</span><br></br>
        <span>아이디:{this.props.userid}</span><br></br>
        <span>비밀번호:{this.props.userpw}</span><br></br>
        <span>인증상태:{sessionStorage.getItem('auth')}</span><br></br>

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
        <input type="button" value="로그인"
          onClick={this.handleClick}></input>
        <input type="checkbox" value={this.state.ischecked} onChange={this.ischeck}></input>자동로그인
            <br></br>
        <span>아이디:{this.state.id}</span><br></br>
        <span>비밀번호:{this.state.pw}</span><br></br>
      </form>
    );
  }
}