import React,{Component}from 'react';
import {RecomIce,RecomItem} from '../style'
import {connect} from 'react-redux'
import {Link} from'react-router-dom'
class Recomend extends Component{
  constructor(props){
    super(props)
    this.sum = this.sum.bind(this)
    this.add = this.add.bind(this)
    this.getName = this.getName.bind(this)
  }
  getName(index){
    let info = ''
    switch(index){
        case '1':
        info='学习笔记'
        break
        case '2':
         info='环境搭建'
         break
        case '3':
         info='知识总结'
         break
        case '4':
         info='日记'
         break
        default:
        info='学习笔记'
    }
    return info
}
sum(arr,index){
    let n =0;
    let info = this.getName(index)
    
     arr.map(item=>{
        if(item.get('cation')===info){
            n++
        }
        return 1
    })
    return n
}



add(i){
        return(
            <Link to={'/cation/'+i} >
             <RecomItem>
                 <span>{this.getName(i)}</span>
                 <div 
                 className="ui teal basic left pointing label right">
                   {this.sum(this.props.homeInfo,i)}
                   </div>
               </RecomItem>
            </Link>
        )
}

    render(){
        return(
         
         
             <RecomIce >
               {this.add('1')}
               {this.add('2')}
               {this.add('3')}
               {this.add('4')}
             </RecomIce>
           
          
       
        )
    }
}
const mapToPrps = (state)=>{
  return ({
      recomd:state.getIn(['home','recomed']),
      homeInfo:state.getIn(['home','homeInfo'])
  })
}
export default connect(mapToPrps,null)(Recomend)
