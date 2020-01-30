import React, { Component } from 'react'

export default class Board extends Component{
    constructor(props){
        super(props);
        this.state={
            board:[]
        }
    }
    componentDidMount(){
        fetch('/board')
        .then(res => res.json())
        .then(board=>this.setState({board}))
    }
    render(){
        return(
            <div>
                <article>
                    <div className="notice">
                        <span>게시판</span><br></br>
                        <div className="border-bottom"></div>
                        <ul>
                            {this.state.board.map(board => <li><a key={board.id}>{board.title}</a></li>)}
                        </ul>
                    </div>
                </article>
            {/* {this.state.topic.map(<a key={topic.id}>{topic.title}</a>)}     
             */}
            
            </div>
        );
    }
}