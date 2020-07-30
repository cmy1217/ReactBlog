import React, { Component } from 'react'

class Title extends Component {
  constructor(props){
    super(props)
    this.sum = this.sum.bind(this)
  }

  sum(arr,tag=false){
    let n = [];
    if(tag){
      arr.map(item=>{
        let s = item.get(tag).split(' ')
        n.push(...s)
        return 1
    })
    }else{
      return arr.size
    }
   let newN = new Set(n)

   return Array.from(newN).length
}


    render() {
        return (
             <div className="ui top attached segment">
                    <div className="ui middle aligned two column grid">
                      <div className="column">
                        <h3 className="ui teal header">{this.props.title}</h3>
                      </div>
                      <div className="right aligned column">
                       共<h2 className="ui orange header m-inline-block m-text-thin">
                        {this.sum(this.props.homeInfo,this.props.tag)}
                        </h2>类
                      </div>
                    </div>
                   
              </div>
        )
    }
}

export default Title