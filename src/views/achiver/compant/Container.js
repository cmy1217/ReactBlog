import React, { Component } from 'react'
import {connect} from 'react-redux'
import Title from './Title'
import Text from './Text'
class Container extends Component {
    render() {
        return (
            <div className="ui container">
               <Title num={this.props.homeInfo.size}></Title>
               <Text arr={this.props.homeInfo}></Text>
            </div>
        )
    }
}
const mapToProps = (state)=>{
    return(
        {
          homeInfo:state.getIn(['home','homeInfo']),
        
        }
    )
}
export default connect(mapToProps,null)(Container)
