import React, { Component } from 'react'
import Title from './Title'
import Text from './Text'
import Notice from './Notice'
import Comment from'./Comment'
import {connect} from 'react-redux'
class Content extends Component {
    render() {
        return (
            <div className="m-container-small m-padded-tb-big animated fadeIn">
                <div className="ui container">
                  <Title timer={this.props.timer}></Title>
                  <Text md={this.props.md}></Text>
                  <Notice timer={this.props.timer}></Notice>
                  <Comment id={this.props.id}></Comment>
                </div>
            </div>
        )
    }
}
const mapState = (state)=>{
    return({
        md:state.getIn(['detail','md']),   
        textvalue:state.getIn(['detail','textvalue']),
        timer:state.getIn(['detail','timer']),
    })
}
export default connect(mapState,null)(Content) 