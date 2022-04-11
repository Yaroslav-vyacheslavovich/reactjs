import React, { Component } from "react";
import { Button } from "./button";
import { Input } from "./input";

export class Form extends Component { 
    state = {
        name: "Жми!",
        value:"",
        messages: []
    }
    handleClick = () => {
        this.setState({ messages: [...this.state.messages, this.state.value] })
        this.setState({value: ""})
    }
    handleChange = (ev) => {
        this.setState({value: ev.target.value})
    }
    render() { 
        return<>
            <Input change={this.handleChange} value={this.state.value }/>
            <Button name={this.state.name} click={this.handleClick}/>
            <ul>
                { this.state.messages.map(message =>
                    <li>{message}</li>)}
            </ul>
            </>
    }
}