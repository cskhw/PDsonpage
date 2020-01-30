import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Textlist extends Component {
    componentDidMount() {
        fetch(props.fetchPath)
        console.log(this.props.fetchPath)
            .then(res => res.json())
            .then(topic => this.setState({ topic }));
    }
    render() {
        return (
            <div className={this.props.name}>
                <span>공지사항</span><br></br>
                <div className="border-bottom"></div>
                <ul>
                    {this.state.topic.map(topic => <li><Link to={{
                        pathname: this.props.path,
                        state: {
                            description: topic
                        }
                    }} key={topic.id}>{topic.title}</Link></li>)}
                </ul>
            </div>
        );
    }
}