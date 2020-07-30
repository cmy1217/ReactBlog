import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

/*eslint-disable*/
class Cationtwo extends Component {
    constructor(props){
        super(props)
       
        this.sum = this.sum.bind(this)
        this.RandonColor = this.RandonColor(this)
        this.getNum = this.getNum.bind(this)
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
      
    
    sum(arr){
         let n = [];
         arr.map(item=>{
            let s = item.get('tag').split(' ')
            n.push(...s)
            return 1
        })
        let newN = new Set(n)

        return Array.from(newN)
    }
    getNum(info,arr){
        let num =0
        arr.map(item=>{
            let sm = item.get('tag').split(' ')
            sm.map(v=>{
                if(v===info){
                    num++
                    return  v
                }
            })
            
            return 1
        })
        return num
    }

    render() {
        return (
            <div className="ui segments m-margin-top-large">
                <div className="ui secondary segment">
                    <div className="ui two column grid">
                    <div className="column">
                        <i className="tags icon"></i>标签 
                    </div>
                    <div className="right aligned column">
                        <a href="/tag/1" className=""> more 
                          <i  className="angle double right icon"></i>
                        </a>
                    </div>
                    </div>
                </div>
            
                <div className="ui teal segment">
                {this.sum(this.props.homeInfo).map((item,index)=>{
                    return(
                        <Link style={this.RandonColor} to={'/tag/'+(index+1)} key={item} className="ui  basic left pointing label m-margin-tb-tiny">
                             <span>{item}</span>
                             <div className="detail">{this.getNum(item,this.props.homeInfo)}</div>
                        </Link>
                    )
                })}
                  
                </div>
            </div>
        )
    }
}
const mapToPrps = (state)=>{
    return ({
        recomd:state.getIn(['home','recomed']),
        homeInfo:state.getIn(['home','homeInfo'])
    })
  }
  export default connect(mapToPrps,null)(Cationtwo)
  
