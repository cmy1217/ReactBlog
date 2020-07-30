import React, { Component } from 'react'
import Cation from './Cation'
import Cationtwo from './Cationtwo'
export default class Right extends Component {
    render() {
        return (
            <div className="five wide column">
                <Cation></Cation>
                <Cationtwo></Cationtwo>
            </div>
        )
    }
}
