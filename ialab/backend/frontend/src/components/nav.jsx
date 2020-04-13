import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Load from '../container/load';
import Section from './section'
import Notice from './notice'
import Boards from './boards'
import Intro from './intro'
import Description from './description'

export default class Nav extends Component {

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
                    <Link to="/boards">게시판</Link>
                    <Link to="/load">오시는길</Link>
                </nav>
                    <Route exact path="/" component={Section}></Route>
                    <Route exact path="/notice" component={Notice}></Route>
                    <Route exact path="/load" component={Load}></Route>
                    <Route exact path="/boards" component={Boards}></Route>
                    <Route exact path="/intro" component={Intro}></Route>
                    <Route exact path="/description" component={Description}></Route>
                    
            </Router>
        );
    }
}