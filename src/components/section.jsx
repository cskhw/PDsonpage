import React, { Component } from 'react';
export default class Section extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pictureNum: '1',
            bannerStyle:{
                position:'relative',
                left:'0rem',
                width:'55rem',
                bottom:'5em'
            },
            button1Style:{
                position:'relative',
                left:'0rem',
                width:'3rem',
                height:'3rem',
                bottom:'5em'
            },
            button2Style:{
                position:'relative',
                left:'0rem',
                width:'3rem',
                height:'3rem',
                bottom:'5em'
            }
        }
    }
    handleclick1 = () => {
        this.setState({ pictureNum: this.state.pictureNum % 6 + 1 })
    }
    handleclick2 = () => {
        this.setState({ pictureNum: this.state.pictureNum - 1 })
        if(this.state.pictureNum <2){
            this.setState({pictureNum: 6})
        }
    }
    render() {
        return (
            <section> 
                <div className="">
                <img style={this.state.bannerStyle}
                src={process.env.PUBLIC_URL + 'section/banner' + this.state.pictureNum + '.jpg'}
                alt="banner" 
                onClick={this.handleclick}></img>
                </div>
                <button style={this.state.button2Style}
                 onClick={this.handleclick1}>
                <span>{'<'}</span></button>
                <button style={this.state.button2Style}
                 onClick={this.handleclick1}>
                     <span>></span></button> 
            </section>
        );
    }
}