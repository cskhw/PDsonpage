import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Load from '../container/load';
import Login from '../container/login';
import Section from './section'
import Notice from './notice'
import Board from './board'
import Intro from './intro'
import Description from './description'

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
                {/*<div className="loginButton">
                    <a href={this.state.go}
                        onClick={this.keeper}>{this.state.status}
                    </a>
        </div>*/}
                <Link to="/"><img src={process.env.PUBLIC_URL+'rootlogo.png'} alt="logo"></img></Link>
                <nav>
                    <Link to="/">홈으로</Link>
                    <Link to="/notice">공지사항</Link>
                    <Link to="/intro">소개</Link>
                    <Link to="/board">게시판</Link>
                    <Link to="/load">오시는길</Link>
                </nav>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/" component={Section}></Route>
                    <Route exact path="/notice" component={Notice}></Route>
                    <Route exact path="/load" component={Load}></Route>
                    <Route exact path="/board" component={Board}></Route>
                    <Route exact path="/intro" component={Intro}></Route>
                    <Route exact path="/description" component={Description}></Route>
            </Router>
        );
    }
}