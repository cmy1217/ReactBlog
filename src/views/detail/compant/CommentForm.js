import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux'
import getData from '../../../assets/js/timer'
import {GetDetail,CleraForm,putTeaxtare,PutMessage} from '../store/creatAction'
class CommentForm extends Component {
 
    render() {
        return (
            <Fragment>
            <div id="comment-container" className="ui teal segment">
            <div>
                <div className="ui threaded comments" style={{maxWidth:"100%"}}>
                    <h3 className="ui dividing header">评论</h3>
                    
                    {
        this.props.useMap.map(item=>{
          return(
            <div key={item} className="comment">
            <a className="avatar" href="#comment-form">
              <img src="https://www.wdhhh.cn/upload/io/img/2020/4/6/1586149620923.png" alt=""></img>
            </a>
          <div className="content">
          <a className="author" href="#comment-form"><span>{item.get('name')}</span></a>
          <div className="metadata"><span>{getData(parseInt(item.get('timer')/1000),"YYYY-MM-DD")}</span></div>
          <div className="text">{item.get('text')}</div>
            <div className="actions"><a  className="reply" href="#comment-form">回复</a></div>
          </div>
          </div>
          )
            
          
        })
      }
     
                </div>
            </div>
        </div>



            <div id="comment-form" className="ui form">
                <div className="field">
                      <textarea
                     
                      className="content"
                      value={this.props.textvalue}
                      onChange={this.props.putText}
                      >
                      </textarea>
                </div>

                <div className="fields">
                      {/* 评论姓名 */}
                      <div className="popup-err-intput field m-mobile-wide m-margin-bottom-small">
                        <div className="ui left icon input">
                          <i className="user icon"></i>
                          <input 
                          type="text" 
                          name="nickname" 
                          placeholder="起个响亮的昵称吧"
                          value={this.props.name}
                          onChange={this.props.username}
                          />

                        
                        </div>
                      </div>
                      {/* 邮箱 */}
                      <div className="popup-err-intput field m-mobile-wide m-margin-bottom-small">
                        <div className="ui left icon input ">
                          <i className="mail icon"></i>
                          <input 
                          type="text" 
                          name="email" 
                          placeholder="邮箱不会作为展示"
                          value={this.props.emali}
                          onChange={this.props.handelEmail}
                          />
                        </div>
                      </div>
                      {/* 按钮 */}
                      <div className="field m-margin-bottom-small m-mobile-wide">
                        <button 
                        className="ui teal basic button m-mobile-wide"
                        onClick={this.props.handelClear}
                        >
                        
                          <i className="eraser icon"></i>
                          清空
                        </button>
                        <button 
                        className="ui teal button m-mobile-wide" 
                        onClick={()=>{this.props.useConment(this.props.textvalue,this.props.name,this.props.emali,this.props.id)}}>
                          <i className="edit icon"></i>
                          发布
                        </button>
                      </div>
                    </div>
            </div>
            </Fragment>
        )
    }
}

const mapState = (state)=>{
    return({
        title:state.getIn(['detail','title']),
        content:state.getIn(['detail','content']),
        textvalue:state.getIn(['detail','textvalue']),
        name:state.getIn(['detail','username']),
        emali:state.getIn(['detail','emali']),
        useMap:state.getIn(['detail','useMap']),
        timer:state.getIn(['detail','timer']),
    })
}

const mapDispath = (dispatch)=>{
    return({
      getDetail(id){
          const action = GetDetail(id)
          dispatch(action)
      },
      handelClear(){
        const action = CleraForm()
        dispatch(action)
      },
      
      putText(e){
          const action = putTeaxtare(e.target.value)
          dispatch(action)
      },
      username(e){
        const action = {
          type:'user_name',
          data:e.target.value,
        }
        dispatch(action)
      },
      handelEmail(e){
        const action = {
          type:'email',
          data:e.target.value,
        }
        dispatch(action)
      },
      useConment(a,b,c,d){
        
       if(((a&&b)&&c)!==''){
        const p = {a,b,c,d}
        
        const action = PutMessage(p)
        dispatch(action)
       }else{
          console.log('aaa');
       }
  
      }
    })
  }
  export default connect(mapState,mapDispath)(CommentForm) 
