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
    async componentDidMount(){
        try {
            const res = await fetch('http://127.0.0.1:8000/topics/')
            const topic = await res.json()
            this.setState({
                topic
            });
            const res2 = await fetch('http://127.0.0.1:8000/boards/')
            const board = await res2.json()
            this.setState({
                board
            });
        } catch(e){
            console.log(e);
        }
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
            <div>
                <section>
                    <div className="banner">
                        <img
                            src={process.env.PUBLIC_URL + 'section/banner' + this.state.pictureNum + '.jpg'}
                            alt="banner"
                            onClick={this.handleclick}>
                        </img>
                    </div>
                    <div className="button1">
                        <button onClick={this.handleclick1}>
                            <span>{'<'}</span>
                        </button>
                    </div>
                    <div className="button2">
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
                            {this.state.topic.map(topic => <li><Link to={{
                                pathname: "/description",
                                state: {
                                    description: topic
                                }
                            }} key={topic.id}>{topic.title}</Link></li>)}
                        </ul>
                    </div>
                    <div className="board">
                        <span>자유게시판</span><br></br>
                        <div className="border-bottom"></div>
                        <ul>
                            {this.state.board.map(board => <li><Link to={{
                                pathname: "/description",
                                state: {
                                    description: board
                                }
                            }} key={board.id}>{board.title}</Link></li>)}
                        </ul>
                    </div>
                </article>
                <footer>
                    <span>copyright © 2019-2020 IALAB</span>
                </footer>
                </div>
        );
    }
}