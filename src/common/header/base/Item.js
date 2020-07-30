import React, { Component ,Fragment} from 'react'
import {Link} from 'react-router-dom'
export default class Item extends Component {
  
  constructor(props){
    super(props)
    this.isBig = this.isBig.bind(this)
}   
    isBig(){
          return  !this.props.big?'item m-mobile-hide':'item'
         }
    render() {
        return (
            <Fragment>
                <h5 className="ui teal header item imgSmall">
                    <img src='https://s1.ax1x.com/2020/07/25/aSyaHs.png' alt='' className="one"/>
                </h5>
                <Link to="/" className={this.isBig()}>
                  <i className="mini home icon"></i>
                  首页
                </Link>

                <Link to="/cation/1" className={this.isBig()}>
                  <i className="mini idea icon"></i>
                  分类
                </Link>

                <Link to="/tag/1" className={this.isBig()}>
                  <i className="mini tags icon"></i>
                  标签
                </Link>

                <Link to="/achiver" className={this.isBig()}>
                  <i className="mini clone icon"></i>
                  归档
                </Link>

                <Link to="/about" className={this.isBig()}>
                  <i className="edit mini outline icon"></i>
                  时间线
                </Link>

                <div className="right item m-mobile-hide">
                  <div className="ui icon inverted transparent input m-margin-tb-tiny">
                    <input placeholder="搜索"type="text" />
                    <i className="search link icon"></i>
                  </div>
                </div>
            </Fragment>
        )
    }
}
