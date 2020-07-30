import React, { Component } from 'react'
import Content from './Content'
import Toolbar from './Toolabr'
export default class Cation extends Component {
    render() {
        return (
            <div className="info" style={{minHeight:"800px"}}>
                <Content id={this.props.id}></Content>
                <Toolbar></Toolbar>
            </div>
        )
    }
}
