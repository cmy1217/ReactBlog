import React, { Component } from 'react'
import {connect} from 'react-redux';
import TagItem from './TagItem'
class Tagfor extends Component {
    render() {
        return (
            <div className="ui attached segment m-padded-tb-large">
                <TagItem homeInfo={this.props.homeInfo} tag="cation" id={this.props.id}></TagItem>
            </div>
        )
    }
}
export const mapState = (state)=>{
    return({
        homeInfo:state.getIn(['home','homeInfo']),
    })
}

export default connect(mapState,null)(Tagfor)