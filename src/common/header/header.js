import React,{Component,Fragment}from 'react';
import {connect} from 'react-redux'
import {getLight} from './store/actionCreate'
import NavHeader from './base/nav'
import './style.css'
import { Light} from './style'

class Header extends Component{
  constructor(props){
    super(props)
    this.state={
      click:1
    }
  
  }
  
  render(){
    return (
      <Fragment >
        <NavHeader className={this.props.isNight?"henight":"helight"}>

        </NavHeader>
        <Light onClick={this.props.changeLight}></Light>
      </Fragment>
        
     )
  }
 
}

  


  const mapStateToProps = (state)=>{
    
    return{
    
      isNight:state.getIn(['home','isNight'])
    }
  }
  const mapDispathToProps = (dispatch)=>{
    return{
   
      changeLight(){
        const action = getLight();
        dispatch(action)
      }

    }
  }



  
export default connect(mapStateToProps,mapDispathToProps)(Header)