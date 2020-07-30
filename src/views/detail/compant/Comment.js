import React, { Component } from 'react'
import CommentForm from './CommentForm'
export default class Comment extends Component {
    render() {
        return (
            <div className="ui bottom attached segment">
               <CommentForm id={this.props.id}></CommentForm>
            </div>
        )
    }
}
