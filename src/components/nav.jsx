import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from '../container/login';
import Load from '../container/load';
import logo from '../public/rootlogo.png'
export default class Nav extends Component {
    constructor(props){
        super(props);
        this.state={
            status:'로그인',
            opacity:'1.0',
            go:'/login'
        }
    }    
    
    componentDidMount(){
        console.log(sessionStorage.getItem('auth'))
        if(localStorage.getItem('auth') === 'true' || sessionStorage.getItem('auth') === 'true'){
            this.setState({status:'로그아웃', go:'/'})
            sessionStorage.setItem('id', localStorage.getItem('id'));
            sessionStorage.setItem('pw', localStorage.getItem('pw'));
            sessionStorage.setItem('auth', localStorage.getItem('auth'));
        }
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
            <Router>
                <form>
                <Link to={this.state.go}
                onClick={this.keeper}>{this.state.status}
                </Link>
                </form>
                <Link to="/"><img src={logo} alt="logo"></img></Link>
                <nav>
                    <Link to href="/">홈으로</Link>
                    <Link to href="/note">공지사항</Link>
                    <Link to="/intro">소개</Link>
                    <Link to="/excutive">임원진</Link>
                    <Link to="/board">게시판</Link>
                    <Link to="/load">오시는길</Link>
                </nav>
                <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/load" component={Load}></Route>
                </Switch>
            </Router>
        );
    }
}