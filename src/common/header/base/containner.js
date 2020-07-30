import React, { Component,Fragment } from 'react'
import Item from './Item'

export default class Containner extends Component {
  
    render() {
        return (
            <Fragment>
   
            <div className="ui container">
                <div className="ui inverted secondary stackable menu">
                    <Item big={this.props.isBig}></Item>
                </div>
            </div>

            </Fragment>
        )
    }
}
