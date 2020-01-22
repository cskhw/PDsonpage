import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from '../container/login';
import Load from '../container/load';
import logo from '../public/rootlogo.png'
export default class Nav extends Component {
    componentDidMount(){}
    state={
        status:'로그인'
    }
    render() {
        return (
            <Router>
                <form>
                <Link to="/login">{this.state.status}</Link>
                </form>
                <a href="/"><img src={logo} alt="logo"></img></a>
                <nav>
                    <a href="/">홈으로</a>
                    <a href="/note">공지사항</a>
                    <a href="/intro">소개</a>
                    <a href="/excutive">임원진</a>
                    <a href="/board">게시판</a>
                    <a href="/load">오시는길</a>
                </nav>
                <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/load" component={Load}></Route>
                </Switch>
            </Router>
        );
    }
}