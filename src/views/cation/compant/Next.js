import React, { Component } from 'react'

export default class Next extends Component {
    render() {
        return (
        <div className="ui bottom attached segment">
            <div className="ui middle aligned two column grid">
                <div className="column">
                    <a  href="!#" className="ui mini teal basic button">上一页</a>
                </div>
                <div className="right aligned column">
                        <a href="!#" className="ui mini teal basic button">下一页</a>
                </div>
            </div>
        </div>
        )
    }
}
