import React, { Component } from 'react';
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={id: '', pw: ''}

        this.handleChangeid = this.handleChangeid.bind(this);
        this.handleChangepw = this.handleChangepw.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
    handleChangeid(e){
        this.setState({id:e.target.id})
    }
    
    handleChangepw(e){
        this.setState({id:e.target.pw})
    }
    handleSubmit(e){
        alert('id, pw = ' + this.state.id + this.state.pw)
        e.preventDefault();
    }
    render() {
        return (
                <div className="Login">
                    <form onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend>로그인</legend>
                            <label htmlFor="id">아이디
                        <input type="text" value={this.state.id} onChange={this.handleChangeid}></input>
                            </label><br></br>
                            <label htmlFor="pw">비밀번호
                        <input type="text" value={this.state.pw} onChange={this.handleChangepw}></input>
                            </label><br></br>
                            <input type="submit" value="로그인"></input>
                        </fieldset>
                    </form>
                </div>
        );
    }
}