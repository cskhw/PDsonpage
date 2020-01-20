import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../components/login';
import Auth from '../container/auth';
import Main from './main';
import logo from '../public/rootlogo.png'
export default class Nav extends Component {
    state = {size:1}
    render() {
        return (
            <Router>
                <form action="/login">
                    <input type="button" name="status" value="로그인"></input>
                </form>
                <a href="/home"><img src={logo} alt="logo"></img></a>
                <nav>
                    <a href="./home">홈으로</a>
                    <a href="./note">공지사항</a>
                    <a href="./intro">소개</a>
                    <a href="./excutive">임원진</a>
                    <a href="./board">게시판</a>
                    <a href="./load">오시는길</a>
                    <a href="../container/login">로그인</a>
                </nav>
                <Route path="/auth" component={Auth}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/" component={Main}></Route>
                <input type="button" value="+"onClick></input>
                <input type="text" value="1"></input>
            </Router>
        );
    }
}