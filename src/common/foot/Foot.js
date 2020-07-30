import React, { Component } from 'react'
import Grid from './Grid'
export default class Foot extends Component {
    render() {
        return (
            <div className="ui inverted vertical segment m-padded-tb-massive">
                <div className="ui center aligned container">
                  <Grid></Grid>
                </div>
            </div>
        )
    }
}
