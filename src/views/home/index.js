import React,{Component}from 'react';
import {GetHomeData} from './store/creatAction'
import {connect} from 'react-redux'
import '../../assets/css/home.css'
import Contain from './compant/Contain'

class Home extends Component{
  
    render(){
     
        return(
          <div className={this.props.isNight?"night":"light"}>
            <Contain >

            </Contain>
            
          </div>
         
           
        )
    }
    componentDidMount(){
     this.props.GetHomeData()
  
    }
   
}

const mapProps = (state) =>{
  return({
   
    isNight:state.getIn(['home','isNight'])
  })
}


const mapDispath =(dispatch)=>({
  GetHomeData(){
   const action = GetHomeData()
   dispatch(action)
  },
 
 
 

})

export default connect(mapProps,mapDispath)(Home)
