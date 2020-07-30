import React,{Component}from 'react';
import {connect} from 'react-redux'
import {GetDetail} from './store/creatAction'
import {withRouter} from 'react-router-dom'

import './style.css'
import Cation from './compant/Cation'
class Detail extends Component{
 

    render(){
        return(
           <Cation id={this.props.match.params.id}></Cation>
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id)

    }
}


const mapDispath = (dispatch)=>{
  return({
    getDetail(id){
        const action = GetDetail(id)
        dispatch(action)
    },
   
   
  
  })
}
export default connect(null,mapDispath)(withRouter(Detail) )
