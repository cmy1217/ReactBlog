import React, { Component } from 'react'
import Grid from './Grid'
import { Link } from 'react-router-dom'
/*eslint-disable*/
class Text extends Component {
    constructor(props){
        super(props)
        this.sum = this.sum.bind(this)
        this.translate = this.translate.bind(this)
      }

      translate(str,tag){
        let newStr = str.split(' ')
        let n = false;
        newStr.map(item=>{
            if(item==this.sum(this.props.homeInfo,tag)[this.props.id]){
                n=true
            }
            return 1
        })
      
        return n
       }
   
       sum(arr,tag){
           let n = [];
           arr.map(item=>{
              let s = item.get(tag).split(' ')
              n.push(...s)
              return 1
          })
          let newN = new Set(n)
   
          return Array.from(newN)
      }

    render() {
        return (
            <div className="ui top attached teal segment">
                {}
                 {this.props.homeInfo.map((item,index)=>{
                     if(this.props.fix){
                         if(this.translate(item.get(this.props.fix),this.props.fix)){
                            return(
                                <div key={item} className="ui padded vertical segment m-padded-tb-large">
                                    <div className="ui middle aligned mobile reversed stackable grid">
                                        <div className="eleven wide column">
                                            
                                            <h3 className="ui header">{item.get('title')}</h3>
                                            <Link  to={'/detail/'+item.get('id')}>
                                            <p className="m-text black">{item.get('description')}</p>
                                            </Link>
                                            <Grid item={item} index={index} ></Grid>
                                       
                                        </div>
                                        <div className="five wide column">
                                            <img src={item.get('url')} alt='' className="ui rounded image"></img>
                                        </div>
                                    </div>
                                </div>
                                     )
                         }
                       
                     }else{
                        return(
                            <div key={item} className="ui padded vertical segment m-padded-tb-large">
                                <div className="ui middle aligned mobile reversed stackable grid">
                                    <div className="eleven wide column">
                                        <h3 className="ui header">{item.get('title')}</h3>
                                        <Link  to={'/detail/'+item.get('id')}>
                                        <p className="m-text black">{item.get('description')}</p>
                                        </Link>
                                        <Grid item={item} index={index}></Grid>
            
                                    </div>
                                    <div className="five wide column">
                                        <img src={item.get('url')} alt='' className="ui rounded image"></img>
                                    </div>
                                </div>
                            </div>
                                 )
                     }
                  
                 })}
                
                
            </div>
        )
    }
}

export default Text

