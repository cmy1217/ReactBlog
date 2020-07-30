import React, { Component } from 'react'

export default class Notice extends Component {
    render() {
        return (
            <div className="ui attached positive message">
                <div className="ui middle aligned grid">
                    <div className="eleven wide column">
                    <ul  className="list">
                        <li> 作者： <span>小蔡</span><a  href="#comment-container">（联系小蔡）</a></li>
                        <li> 发表时间： <span>{this.props.timer}</span></li>
                        <li>版权声明：自由转载-非商用-非衍生-保持署名（创意共享3.0许可证）</li>
                        <li>公众号转载：请在文末添加此域名或二维码</li>
                    </ul>
                    </div>
                    <div className="five wide column">
                      <img  alt="" src="https://s1.ax1x.com/2020/07/26/apLqnH.png" style={{width: "110px"}} className="ui right floated rounded bordered image"></img>
                    </div>
                </div>
            </div>
        )
    }
}
