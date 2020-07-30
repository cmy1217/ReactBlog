import React, { Component } from 'react'
import Title from './Title'
import Texts from './Text'
import Next from './Next'
import {fromJS} from 'immutable'
import { connect} from 'react-redux'
/*eslint-disable*/
class Lefttext extends Component {
    
    constructor(props){
        super(props)
        this.state={
            page:1,
            count:0
        }
        this.previous = this.previous.bind(this)
        this.next = this.next.bind(this)
        this.incoming = this.incoming.bind(this)
       
    }
    previous(){
        if(this.state.page>1){
            let n = this.state.page-1
            this.setState({
                page:n
            })
        }else{
            this.setState({
                page:this.props.count
            })
        }
    }
    next(){
        
        if(this.state.page<this.props.count){
            let n = this.state.page+1
            this.setState({
                page:n
            })
        }else{
            this.setState({
                page:1
            })
        }
    }
    incoming(arr){
        const newArr = []
        const str = arr.toJS()
       
       
        for (let i = (this.state.page-1)*4; i < this.state.page*4; i++) {
            if(str[i]){
              newArr.push(str[i])
            }
            
            
        }
       return fromJS(newArr)

    }
  

    render() {
        return (
            <div className="eleven wide column">
               <Title title="文章" homeInfo={this.props.homeInfo}></Title>
               {/* Text封装完毕传一个参数，全部循环，传入分类，进行选择 ,也要传入当前路由id*/}
               <div>
               <Texts homeInfo={this.incoming(this.props.homeInfo)} ></Texts>
               
               <Next previous={this.previous} next={this.next}></Next>    
               </div>
               
               
            </div>
        )
        
    }

 
}

const mapToProps = (state)=>{
    return(
        {
          homeInfo:state.getIn(['home','homeInfo']),
          nowpage:state.getIn(['home','nowpage']),
          count:state.getIn(['home','count']),
          leaveMessage:state.getIn(['home','leaveMessage'])
          
        }
    )
}
export default connect(mapToProps,null)(Lefttext)