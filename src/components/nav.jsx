import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Load from '../container/load';
import logo from '../public/rootlogo.png'
import Login from '../container/login';
import Section from './section'

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: '로그인',
            opacity: '1.0',
            go: '/login'
        }
    }

    componentDidMount() {
        console.log(sessionStorage.getItem('auth'))
        if (localStorage.getItem('auth') === 'true' || sessionStorage.getItem('auth') === 'true') {
            this.setState({ status: '로그아웃', go: '/' })
            sessionStorage.setItem('id', localStorage.getItem('id'));
            sessionStorage.setItem('pw', localStorage.getItem('pw'));
            sessionStorage.setItem('auth', localStorage.getItem('auth'));
        }
    }

    render() {
        return (
            <Router>
                <div className="loginButton">
                    <Link to={this.state.go}
                        onClick={this.keeper}>{this.state.status}
                    </Link>
                </div>
                <Link to="/"><img src={logo} alt="logo"></img></Link>
                <nav>
                    <Link to="/">홈으로</Link>
                    <Link to="/note">공지사항</Link>
                    <Link to="/intro">소개</Link>
                    <Link to="/board">게시판</Link>
                    <Link to="/load">오시는길</Link>
                </nav>
                <Switch>
                    <Route path="/" component={Section}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/load" component={Load}></Route>
                </Switch>
            </Router>
        );
    }
}