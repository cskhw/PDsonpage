import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
export default class Section extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pictureNum: '1',
        }
        this.handleclick1=this.handleclick1.bind(this);        
        this.handleclick2=this.handleclick2.bind(this);
    }
    handleclick1 = () => {
        this.setState({ pictureNum: this.state.pictureNum % 6 + 1 })
    }
    handleclick2 = () => {
        this.setState({ pictureNum: this.state.pictureNum - 1 })
        if (this.state.pictureNum < 2) {
            this.setState({ pictureNum: 6 })
        }
    }
    render() {
        return (
            <Router>
            <section>
                <div className="banner">
                    <img 
                        src={process.env.PUBLIC_URL + 'section/banner'+ this.state.pictureNum +'.jpg'}
                        alt="banner"
                        onClick={this.handleclick}>
                    </img>
                </div>
                <div className="arrowbutton">
                    <button onClick={this.handleclick1}>
                        <span>{'<'}</span>
                    </button>
                    <button onClick={this.handleclick1}>
                        <span>></span>
                    </button>
                </div>
            </section>
            <article>
                
            </article>
            </Router>
        );
    }
}