import React, { Component } from 'react'
import Left from './Lefttext'
import Right from './Right'
export default class context extends Component {
    render() {
        return (
            <div className="ui container">
              <div className="ui stackable grid">
                <Left></Left>
                <Right></Right>
              </div>
            </div>
        )
    }
}
