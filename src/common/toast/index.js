import React,{Component,Fragment}from 'react';
import {connect} from 'react-redux'
import {Warring} from './style'

class Toast extends Component {
 

    render(){
        return(
            <Fragment>
                {this.props.show?<Warring>{this.props.message}</Warring>:null}
            </Fragment>
            
         
        )
    }
}

const mapState = (state)=>{
  return{
    show:state.getIn(['toast','show']),
    message:state.getIn(['toast','message'])
  }
}

export default connect(mapState,null)(Toast)