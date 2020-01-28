import { React, Component } from 'react';

export default class Notice extends Component{
    constructor(props){
        super(props)
    }
    

    render(){
        return(
            <div className="hello">
            <li>공지사항</li>
            </div>
        );
    }
}