import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import getData from '../../../assets/js/timer'
export default class Title extends Component {
    render() {
        return (
            <div className="ui top attached segment">
                <div className="ui horizontal link list">
                    <div className="item">
                        <img src="https://s1.ax1x.com/2020/07/25/aSOO1S.jpg" alt="" className='ui avatar image'/>
                        <div className="content">
                                <Link to="/about" className="header">小蔡</Link>
                        </div>
                    </div>
                    <div className="item">
                   
                         <i className="calendar icon"></i>
                         <span >{getData(parseInt(this.props.timer/1000))}</span>
                   
                    </div>
                </div>
            </div>
        )
    }
}
