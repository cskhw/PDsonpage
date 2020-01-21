import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../container/login';
import Main from './main';
import logo from '../public/rootlogo.png'
export default class Nav extends Component {
    render() {
        return (
            <Router>
                <form action="/login">
                    <input type="button" name="status" value="로그인"></input>
                </form>
                <a href="/home"><img src={logo} alt="logo"></img></a>
                <nav>
                    <a href="home">홈으로</a>
                    <a href="note">공지사항</a>
                    <a href="intro">소개</a>
                    <a href="excutive">임원진</a>
                    <a href="board">게시판</a>
                    <a href="load">오시는길</a>
                    <a href="login">로그인</a>
                </nav>
                <Route path="/login" component={Login}></Route>
                <Route path="/" component={Main}></Route>
            </Router>
        );
    }
}