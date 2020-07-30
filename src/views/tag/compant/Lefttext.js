import React, { Component,Fragment } from 'react'
import Title from './Title'
import Text from '../../home/compant/Text'
import Next from './Next'
import Tagfor from './Tagfor'
import { connect} from 'react-redux'
class Lefttext extends Component {
 
    render() {
        return (
            <Fragment>
               <Title title="标签" homeInfo={this.props.homeInfo} tag="tag"></Title>
               {/* Text封装完毕传一个参数，全部循环，传入分类，进行选择 ,也要传入当前路由id*/}
                <Tagfor id={this.props.id}></Tagfor>
               <div>
               <Text homeInfo={this.props.homeInfo} fix="tag" id={this.props.id}></Text>
               <Next></Next>
               </div>
              
               </Fragment>
        )
    }
}
const mapToProps =(state)=>{
    return(
        {
          homeInfo:state.getIn(['home','homeInfo']),
          nowpage:state.getIn(['home','nowpage'])
        }
    )
  }
  export default connect(mapToProps,null)(Lefttext)