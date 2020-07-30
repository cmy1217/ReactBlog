import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
            <div className="ui top attached padded segment">
                    <div className="ui middle aligned two column grid">
                        <div className="column">
                            <h3 className="ui teal header">
                                归档
                            </h3>
                        </div>
                        <div className="right aligned column">
                            共<h2 className="ui orange header m-inline-block m-text-thin">{this.props.num}</h2>篇文章
                        </div>
                    </div>
                </div>
        )
    }
}
