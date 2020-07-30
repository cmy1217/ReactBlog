import React,{Component}from 'react';
import { connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {sum} from '../../../assets/js/common'
class HomeTag extends Component{
    constructor(props){
        super(props)
        this.translate = this.translate.bind(this)
        this.RandonColor = this.RandonColor(this)
        this.goWhere = this.goWhere.bind(this)
    }
    RandonColor(){
        const n = [1,1,1]
        let res = []
        n.map(item=>{ 
          let id = Math.floor(Math.random()*254*item)
          res.push(id)
          return 1
        })
        let style = {
          color:`rgb(${res[0]},${res[1]},${res[2]}`,
          borderColor:`rgb(${res[0]},${res[1]},${res[2]}`,
          background: "none #fff"
        }
        
        return style
      }
    
      goWhere(arr,info){
      const n = sum(arr,'tag').indexOf(info)
      return (n+1)
      }
    
    
    
      translate(str){
        let newStr = str.split(' ')
        return newStr
       }
    
    render(){
        return(
            <div style={{"overflow":"hidden"}} className="HomeTag">
             
            {this.translate(this.props.item.get('tag')).map(info=>{
              return(
                
                 <Link  key={info} to={`/tag/${this.goWhere(this.props.homeInfo,info)}`}>
                <div   style={this.RandonColor} className="ui left pointing  basic label " >
                  {info}
                </div>
                </Link>
              )

            })}
          
         
          </div>
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
export default connect(mapToProps,null)(HomeTag)