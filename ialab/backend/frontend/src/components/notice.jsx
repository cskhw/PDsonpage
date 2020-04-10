import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

export default class Notice extends Component {
    state = {
            topics: [],
            num:'0'
    }
    async componentDidMount(){
        try {
            const res = await fetch('http://127.0.0.1:8000/topics/');
            const topics = await res.json();
            this.setState({
                topics
            });
        } catch(e){
            console.log(e);
        }
    }
    render() {
        return (
                <article>
                    <div className="notice">
                        <span>공지사항</span><br></br>
                        <div className="border-bottom"></div>
                                <ul>
                                    {this.state.topics.map(topic => 
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