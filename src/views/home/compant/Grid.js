import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect} from 'react-redux'
import getData from '../../../assets/js/timer'
import Tag from '../base/Tag'
 class Grid extends Component {
    constructor(props){
        super(props)
        
        this.getName = this.getName.bind(this)
        this.message = this.message.bind(this)
      }
    getName(index){
        let info = ''
        switch(index){
            case '学习笔记':
            info='1'
            break
            case '环境搭建':
             info='2'
             break
            case '知识总结':
             info='3'
             break
            case '日记':
             info='4'
             break
            default:
            info='1'
        }
        return info
    }
    message(arr,index){
       const newArr = arr.toJS()
       
        return(
           newArr[index]['count(*)']
        )
    }
    
    render() {
        return (
            <div className="ui grid">
                <div className="row">
                    <div className="six wide column">
                        <div className="ui mini horizontal link list">
                            <div className="item">
                                <img src="https://s1.ax1x.com/2020/07/25/aSOO1S.jpg" alt='' className='ui avatar image'/>
                                <div className="content">
                                   <div to="/about" className="header">小蔡</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right aligned ten wide column">
                        <Link to={'/cation/'+this.getName(this.props.item.get('cation'))} className="ui teal basic label m-padded-tiny m-text-thin">
                        {this.props.item.get('cation')}
                        </Link>
                    </div>
                </div>                   
                <div className="row">
                 <div className="sixteen wide column m-black">
                     <span className="m-margin-lr-small">
                         <i className="calendar icon"></i>
                         <span>{getData(parseInt(this.props.item.get('timer')/1000),0)}</span>
                     </span>
                     <span className="m-margin-lr-small">
                         <i className="hand pointer icon">
                             <span>{this.props.item.get('hit')}</span>
                         </i>
                     </span>
                     <span className="m-margin-lr-small">
                         <i className="comment alternate outline icon">
                             <span>{this.message(this.props.message,this.props.index)}</span>
                         </i>
                     </span>
                 </div>
                </div>
                <div className="row">
                    <div className="column">
                        <Tag item={this.props.item}></Tag>
                    </div>
                </div>
            </div>
        )
    }
}
const mapState = (state)=>{
    return(
        {
         
          message:state.getIn(['home','leaveMessage'])
          
        }
    )
}
export default connect(mapState,null)(Grid)