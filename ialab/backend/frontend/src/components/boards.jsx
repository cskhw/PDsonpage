import React, { Component } from 'react'

export default class Boards extends Component{
    state = {
        boards: []
    };
    async componentDidMount(){
        try {
            const res = await fetch('http://127.0.0.1:8000/boards/');
            const boards = await res.json();
            this.setState({
                boards
            });
        } catch(e){
            console.log(e);
        }
    }
    render(){
        return(
            <div>
                <article>
                    <div className="notice">
                        <span>게시판</span><br></br>
                        <div className="border-bottom"></div>
                        <ul>
                            {this.state.boards.map(board => <li><a key={board.id}>{board.title}</a></li>)}
                        </ul>
                    </div>
                </article>
            {/* {this.state.topic.map(<a key={topic.id}>{topic.title}</a>)}     
             */}
            
            </div>
        );
    }
}