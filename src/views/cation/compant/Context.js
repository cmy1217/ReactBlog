import React, { Component } from 'react'
import Left from './Lefttext'
export default class context extends Component {
    render() {
        return (
            <div className="ui container">
              
                <Left id={this.props.id}></Left>
               
             
            </div>
        )
    }
}
