import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default class Section extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pictureNum: '1',
            topic: [],
            board: []
        }
        this.handleclick1 = this.handleclick1.bind(this);
        this.handleclick2 = this.handleclick2.bind(this);
    }
    componentDidMount() {
        fetch('/topic')
            .then(res => res.json())
            .then(topic => this.setState({ topic }));
        fetch('/board')
            .then(res => res.json())
            .then(board => this.setState({ board }));
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
                            src={process.env.PUBLIC_URL + 'section/banner' + this.state.pictureNum + '.jpg'}
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
                    <div className="notice">
                        <span>공지사항</span><br></br>
                        <div className="border-bottom"></div>
                        <ul>
                            {this.state.topic.map(topic => <li><a key={topic.id}>{topic.title}</a></li>)}
                        </ul>
                    </div>
                    <div className="board">
                        <span>자유게시판</span><br></br>
                        <div className="border-bottom"></div>
                        <ul>
                            {this.state.board.map(board => <li><a key={board.id}>{board.title}</a></li>)}
                        </ul>
                    </div>
                </article>
            </Router>
        );
    }
}