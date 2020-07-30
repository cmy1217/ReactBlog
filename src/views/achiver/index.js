import React, { Component } from 'react'
import Copmpant from './compant/Container'
import {connect} from 'react-redux'
import {GetHomeData} from '../home/store/creatAction'
class Achiver extends Component {
    render() {
        return (
            <div className="m-container-small m-padded-tb-big info" style={{minHeight:"800px"}}>
                <Copmpant></Copmpant>
            </div>
        )
    }
    componentDidMount(){
        this.props.GetHomeData()
    }
}


export const mapDispth = (dispatch)=>{
    return({
        GetHomeData(){
            const action = GetHomeData()
             dispatch(action)
        }
    })
}
export default connect(null,mapDispth)(Achiver)
