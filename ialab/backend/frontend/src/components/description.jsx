import React, { Component } from 'react'

export default class Description extends Component{
    render(){
        return(
            <div className="textboard">
            <div className="title"><span>
                {this.props.location.state.description.title}</span><br></br>
            </div>
            <div className="description">
            <span>{this.props.location.state.description.description}</span>
            
            </div>
            </div>
        );
    }
}