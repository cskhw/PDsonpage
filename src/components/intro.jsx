import React, { Component } from 'react'
import Textlist from './textlist'
export default class Intro extends Component{
    render(){
        return(
            <div>
            <span>추가 예정입니다.</span>     
            <Textlist fetchPath="/topic" path="/discription"/>
            
            </div>
        );
    }
}