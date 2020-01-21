import React, { Component } from 'react'
import axios from 'axios'

const test = async () => {
    const response = await axios.get('/login')
    console.log(response.data)
}

export default class Main extends Component{
    
    render(){
        test();
        return(
            <div className="secline">
            <span>id = {this.props.userid}</span><br></br>
            <span>pw = {this.props.userpw}</span><br></br>
            <span>get = {}</span>
            </div>
        );
    }
}