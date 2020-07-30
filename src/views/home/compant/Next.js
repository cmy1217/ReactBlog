import React, { Component } from 'react'

export default class Next extends Component {



    render() {
        return (
        <div className="ui bottom attached segment">
            <div className="ui middle aligned two column grid">
                <div className="column">
                    <button onClick={this.props.previous} className="ui mini teal basic button">上一页</button>
                </div>
                <div className="right aligned column">
                    <button onClick={this.props.next} className="ui mini teal basic button">下一页</button>
                </div>
            </div>
        </div>
        )
    }
}
