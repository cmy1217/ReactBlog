import React, { Component ,Fragment} from 'react'
import { Link } from 'react-router-dom';
/*eslint-disable*/
export default class TagItem extends Component {
    constructor(props){
        super(props)
       
        this.sum = this.sum.bind(this)
       
        this.getNum = this.getNum.bind(this)
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
    getNum(info,arr,tag){
        let num =0
        arr.map(item=>{
            let sm = item.get(tag).split(' ')
            sm.map(v=>{
                if(v===info){
                    num++
                    
                }
            })
            
            return 1
        })
        return num
    }
    render() {
        return (
            <Fragment>
                 {this.sum(this.props.homeInfo,this.props.tag).map((item,index)=>{
                      return(
                        <Link to={`/${this.props.tag}/`+(index+1)} key={item}>
                        <div className="ui labeled button tiny m-margin-tb-tiny">
                            
                          <span className={this.props.id==index?'ui basic button teal':'ui basic button'}>{item}</span>
                          <div className={this.props.id==index?"ui basic left pointing label teal":"ui basic left pointing label"}>
                            {this.getNum(item,this.props.homeInfo,this.props.tag)}
                          </div>
                         </div>
                        </Link>
                      )
                  })}
            </Fragment>
        )
    }
}
