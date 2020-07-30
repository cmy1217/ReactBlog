import React,{Component}from 'react';
import {connect} from 'react-redux';
import {GetHomeData} from '../home/store/creatAction'
import Cationcom from './compant/Cationcom'
class Cation extends Component{

    
    render(){
        return(
        <Cationcom id={this.props.match.params.id-1}></Cationcom>
            
        )
    }
   
       
    
    componentDidMount(){
        this.props.GetHomeData()
        
    }
}
export const mapState = (state)=>{
    return({
        homeInfo:state.getIn(['home','homeInfo']),
    })
}

export const mapDispth = (dispatch)=>{
    return({
        GetHomeData(){
            const action = GetHomeData()
             dispatch(action)
        }
    })
}

export default connect(mapState,mapDispth)(Cation)