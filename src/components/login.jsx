import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom'
export default class Login extends Component {
    render() {
        return (
                <div className="Login">
                    <form action='../container/auth' method="get">
                        <fieldset>
                            <legend>로그인</legend>
                            <label for="id">아이디
                        <input type="text" id="id" name="ID" placeholder="id"></input>
                            </label><br></br>
                            <label for="pw">비밀번호
                        <input type="text" id="pw" name="PW" placeholder="password"></input>
                            </label><br></br>
                            <input type="submit" value="로그인"></input>
                        </fieldset>
                    </form>
                </div>
        );
    }
}