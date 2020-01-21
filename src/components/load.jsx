import React, { Component } from 'react'

export default class Main extends Component{
    render(){
        return(
            <div>
                 <input type="button" value="+"onClick></input>
                <input type="text" value={this.props.size} onClick={this.props.increment}></input>
                <br></br><span>size = {this.props.size}</span>
                <br></br><span>{this.props.auth}</span>
                <br></br><span>{this.props.size}</span>
            
            
            </div>
        );
    }
}