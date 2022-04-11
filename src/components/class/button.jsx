import React, { Component } from 'react';



export class Button extends Component { 
    render() {
        return <a className = "green" onClick={this.props.click} onSubmit={this.props.submit}>{this.props.name}</a>
  }
}