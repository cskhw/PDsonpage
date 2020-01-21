import React, { Component } from 'react'
import axios from 'axios'

export default class Main extends Component{
    async getDataAxios(){
        const response = await axios.get('https://localhost:3000/auth')
        console.log(response.data)
    }
    render(){
        this.getDataAxios()
        return(
            <div className="secline">
            <span>id = {this.props.userid}</span><br></br>
            <span>pw = {this.props.userpw}</span><br></br>
            <span>get = {}</span>
            </div>
        );
    }
}