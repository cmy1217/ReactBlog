import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import getData from '../../../assets/js/timer'
export default class Text extends Component {
    constructor(props){
        super(props)
        this.getTime = this.getTime.bind(this)
    }
    getTime(timer){
       const arr = getData(parseInt(timer/1000),0).split('-')
       return `${arr[1]}月${arr[2]}日`
    }
    render() {
        return (
            <div>
                <h3 className="ui center aligned header">2020</h3>
                <div className="ui fluid vertical menu">
                  {this.props.arr.map(v=>{
                      return(
                        <Link to={`/detail/${v.get('id')}`} key={v} className="item">
                            <span>
                            <i className="mini teal circle icon"></i>
                            <span>{v.get('title')}</span>
                            <div className="ui teal basic left pointing label m-padded-mini">
                                {this.getTime(v.get('timer'))}
                            </div>
                            </span>
                        </Link>
                      )
                  })}
                </div>
            </div>
        )
    }
}
