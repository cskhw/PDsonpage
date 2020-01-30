import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

export default class Notice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: [],
            num:'0'
        }
    }
    componentDidMount() {
        fetch('/topic')
            .then(res => res.json())
            .then(topic => this.setState({ topic }))
    }
    render() {
        return (
                <article>
                    <div className="notice">
                        <span>공지사항</span><br></br>
                        <div className="border-bottom"></div>
                                <ul>
                                    {this.state.topic.map(topic => 
                                    <li>
                                    
                                        <Link to={{
                                        pathname:"/description",
                                        state : {
                                            description : topic
                                        }
                                    }}
                                    key={topic.id}>
                                        {topic.title}</Link>
                                        {console.log(topic)}
                                     </li>)}
                                </ul>
                    </div>
                </article>
        );
    }
}