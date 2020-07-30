import React,{Component}from 'react';
import {connect} from 'react-redux'
import {Moon} from '../header/style'
class Mon extends Component{
    render(){
        return(
            
            <div>
                {this.props.isNight?<Moon></Moon>:null}
            </div>
        )
    }
}

const mapState = (state)=>{
    return({
      isNight:state.getIn(['home','isNight'])
    })
}
export default connect(mapState,null)(Mon)