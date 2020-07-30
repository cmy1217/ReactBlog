import React, { Component } from 'react'
import { Timeline } from 'antd';
import './style.css'
import {connect} from 'react-redux'
import { ClockCircleOutlined } from '@ant-design/icons';
import {setAxios} from './store/creatAction'
class TimeLine extends Component {
 
  
    render() {
        return (
          <div className="m-container-small m-padded-tb-big animated fadeIn">
            <div className="ui container timeline">
            <Timeline mode="left" className="nicaragua">
            {this.props.line.map(item=>{
                return(
                   
                      <Timeline.Item 
                      dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />} 
                      key={item.id}
                      label={`${item.timer}`}>{item.text}
                      
                      </Timeline.Item>
                   
                )
            })}
              </Timeline>
            </div>
        </div>
        )
    }
    componentDidMount(){
        this.props.getLine()
    }
  
}
const mapState = (state)=>{
    return({
        line:state.getIn(['timeline','line'])
    })
}

const mapDispth = (dispatch)=>({
    getLine(){
        const action = setAxios()
        dispatch(action)
      }
})


export default connect(mapState,mapDispth)(TimeLine)
