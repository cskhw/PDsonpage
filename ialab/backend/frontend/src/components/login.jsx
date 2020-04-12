import React, { Component} from 'react';
import { BrowserRouter as Router, Link,Route } from 'react-router-dom'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      auth: 'false',
      ischecked: 'false',
      status:'/login'
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
        localStorage.setItem('auth', 'true')
      }
    }
    else {
      (alert(this.state.auth))
      this.setState({ auth: 'false' });
      sessionStorage.setItem('auth', 'false');

    }
  }
  ischeck = (e) => {
    this.setState({ ischecked: !this.state.ischecked })
  }
  keeper = (e) => {
    if(this.state.go==='/'){
        this.setState({go:'/login', status:'로그인'})
        sessionStorage.removeItem('id')
        sessionStorage.removeItem('pw')
        sessionStorage.removeItem('auth')
        localStorage.removeItem('id')
        localStorage.removeItem('pw')
        localStorage.removeItem('auth')
    }
}
  render() {

    return (
      <div className="container">
      <form action="http://localhost:8000/accounts/login/" method="post">
            <label for="username">ID</label>
            <input type="text" placeholder="아이디 입력" name="username" required></input><br></br>
            
            <label for="password">PW</label>
            <input type="text" placeholder="비밀번호 입력" name="password" required></input><br></br>
            
            <button type="submit">로그인</button><br></br>
            
            <label for="auto">자동로그인</label>
            <input type="checkbox" checked="checked" name="auto"></input>
            <br></br>
      </form>
      </div>
    );
  }
}