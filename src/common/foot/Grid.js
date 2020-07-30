import React, { Component,Fragment } from 'react'

export default class Grid extends Component {
    render() {
        return (
          <Fragment>
            <div className="ui inverted divided stackable grid">
                <div className="four wide column">
                    <div className="ui inverted link list">
                        <div className="item">
                            <img src="https://s1.ax1x.com/2020/07/26/aCC10K.jpg" style={{width:"130px"}} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="four wide column">
                    <h4 className="ui inverted header m-text-thin m-text-spaced">
                        友情链接
                    </h4>
                    <div className="ui inverted link list">
                        <a href="!#" target="_blank" className="item m-text-thin">暂无</a>
                    </div>
                </div>
                <div className="four wide column">
                  <h4 className="ui inverted header m-text-thin m-text-spaced">
                      联系本人  
                  </h4>
                  <div className="ui inverted link list">
                      <a className="item m-text-thin" href="!#">1354352841@qq.com</a>
                      <a className="item m-text-thin" href="!#">QQ:1354352841</a>
                      <a className="item m-text-thin" href="!#">WeChat: King</a>
                  </div>
                </div>
                <div className="four wide column">
                    <br></br><br></br>
                    <p className="m-text-thin m-text-spaced m-opacity-mini">
                        人生无戏
                    </p>
                </div>
            
            </div>
            <div className="ui inverted section divider"></div>
            <p  className="m-text-thin m-text-spaced m-opacity-tiny">
                <a href="http://www.beian.gov.cn/"
                  rel="noopener noreferrer" 
                  target="_blank" 
                  style={{color:"rgba(255,255,255,0.9)"}}>暂无备案</a>
                 | www.baidu.com | By Robot
            </p>
          </Fragment>
        )
    }
}
