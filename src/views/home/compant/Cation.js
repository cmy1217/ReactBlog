import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Recom from '../base/Recomend'
export default class Cation extends Component {
    render() {
        return (
            <div className="ui segments">
              <div className="ui secondary segment">
                <div className="ui two column grid">
                    <div className="column">
                        <i className="idea icon"></i>分类
                    </div>
                    <div className="right aligned column">
                        <Link to='/cation/1'>more</Link>
                        <i className="angle double right icon"></i>
                    </div>
                </div>

              </div>
              <div className="ui teal segment">
                <div className="ui fluid vertical menu">
                   <Recom></Recom>
                </div>
              </div>
            </div>
        )
    }
}
