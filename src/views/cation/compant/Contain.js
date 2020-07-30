import React, { Component } from 'react'
import Context from './Context'
export default class Contain extends Component {
    render() {
        return (
            <div className="m-container-small m-padded-tb-big animated fadeIn info" style={{minHeight:"800px"}}>
                <Context id={this.props.id}></Context>
            </div>
        )
    }
}
