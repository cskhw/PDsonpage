import React, { Component } from 'react'
import { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie'

class Header extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        const { cookies } = props;

        this.state = {
            sessionid: cookies.get('sessionid') || 'false'
        }

        this.handleLoginButton = this.handleLoginButton.bind(this)
    }
    handleLoginButton = () => {
        this.setState({
            sessionid: ' '
        })
    }
    render() {
        return (
            <div className="header">
                <a style={{ position: 'relative', left: 20 + 'rem' }}
                    onClick={this.state.sessionid && this.handleLoginButton}
                    href={this.state.sessionid ? "http://localhost:3000/" : "http://localhost:8000/accounts/login"}>{this.state.sessionid ? '로그아웃' : '로그인'}</a>
            </div>
        );
    }
}

export default withCookies(Header)
