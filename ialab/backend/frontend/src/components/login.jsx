import React, { Component} from 'react';
import CSRFToken from './csrftoken'

export default class Login extends Component {
  state={
    error:''
  }
  async componentDidMount(){
    try {
      const res = await fetch('http://127.0.0.1:8000/accounts/login/');
      const error = await res.json();
      this.setState({
          error:[error]
      });
  } catch(e){
      console.log(e);
  }
  }
  render() {

    return (
      <div className="container">
      <form action="http://localhost:8000/accounts/login/" method="post">
            <CSRFToken />
            <label for="username">ID</label>
            <input type="text" placeholder="아이디 입력" name="username" required></input><br></br>
            
            <label for="password">PW</label>
            <input type="text" placeholder="비밀번호 입력" name="password" required></input><br></br>
            
            <button type="submit">로그인</button><br></br>
    <span name="error">{this.props.error}</span>
            <label for="auto">자동로그인</label>
            <input type="checkbox" checked="checked" name="auto"></input>
            <br></br>
      </form>
      </div>
    );
  }
}