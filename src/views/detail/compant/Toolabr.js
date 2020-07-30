import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group' 
/*eslint-disable*/
export default class Toolabr extends Component {

    constructor(props){
        super(props)
        this.state={
            OnChat:false,
            read:null,
            dir:[],
            arrt:[],   
            cssdir:false,
            fouce:0
        }
        this.onWechat = this.onWechat.bind(this)
        this.outChat = this.outChat.bind(this)
        this.backTop = this.backTop.bind(this)
        this.read = this.read.bind(this)
        this.makeDir = this.makeDir.bind(this)
        this.showDir = this.showDir.bind(this)
        this.force = this.force.bind(this)
        
    }

    onWechat(){
        
        this.setState({
            OnChat:true
        })
        
    }
    outChat(){
        this.setState({
            OnChat:false
        })
     
    }
   
    backTop(){
        var t = document.getElementById('root').scrollTop
        window.scroll({ top: t, left: 0, behavior: 'smooth' });
    }
    getDir(){
       
        if(this.state.dir.length>0){

        }else{
       
        const arr = []
        document.querySelectorAll('h2').forEach((item,index)=>{
           arr.push(item.id)
         
        })
        

        if(arr.length>0){
            this.setState({
                dir:arr,
               
            })
        }else{
            setTimeout(()=>{
                this.getDir()
            },300)
        }
       
        }
    }
    

    read(){
        var t = document.getElementById('root').clientHeight 
        window.scroll({ top: t, left: 0, behavior: 'smooth' });
    }

    force(index){
        this.setState({
            arrt:[]
        })
        setTimeout(()=>{
        const arrt = []
        document.querySelectorAll('h1').forEach(v=>{
            
            const n = v.id.substr(0,1)
            if(n==index+1){
                arrt.push(v.id)
            }
           this.setState({
               arrt:arrt
           })
        })
        },500)
        

      this.setState({
          fouce:index,
          
      })
    }

    makeDir(){
        
       if(this.state.dir.length>0){
        return  (
            <ul className="toc-list newspaper">
                {this.state.dir.map((item,index)=>{
                    return(
                        <li   key={item} className="toc-list-item nginx ">
                        <a onClick={()=>this.force(index)} href={`#${item}`} className={this.state.fouce==index?"toc-link is-active-link node-name--H2 ":"toc-link  node-name--H2"}>
                                  {item}
                        </a>
                        <CSSTransition
                        in={index==this.state.fouce}
                        timeout={500}
                        classNames="dirt"
                        unmountOnExit
                        >
                        <ul className="toc-list  is-collapsible">
                            {this.state.arrt.map(v=>{
                                return(
                                    <li key={v} className="toc-list-item">
                                       <a className="toc-link node-name--H3 " href={`#${v}`}>{v}</a>
                                     </li>
                                )
                            })}
                            
                        </ul>
                        </CSSTransition>
                      </li>
                    )
                })}
               
            </ul>
        )
       }else{
           setTimeout(()=>{
            this.makeDir()
           },2000)
       }
   
    }
    showDir(){
        const a = this.state.cssdir
        this.setState({
            cssdir:!a
        })
    }

    componentDidMount(){
        this.getDir()
    }

    render() {
        

        return (
            <div id="toolbar" className="m-padded m-fixed m-right-bottom">
                <div className="ui vertical icon buttons">
                    <Link to="/" className="ui teal button">返回</Link>
                    <button className="ui toc teal button"
                    onClick={this.showDir}
                    >目录</button>
                    <a href="#comment-container" className="ui toc teal button">留言</a>


                    <button 
                    onMouseOver={this.onWechat} 
                    onMouseOut={this.outChat} 
                    className="ui wechat icon button ">
                        <i className="weixin icon"></i>
                    </button>

                    <button 
                    onClick={this.read}
                    className="ui icon button">
                        <i className="lightbulb outline icon"></i>
                    </button>

                    <button className="ui icon button" onClick={this.backTop}>
                        <i className="chevron up icon"></i>
                    </button>
                    <CSSTransition
                    in={this.state.OnChat}
                    classNames="show"
                    timeout={1000}
                    unmountOnExit
                    >
                    <div className="ui wechats wechat-qr flowing popup left center transition visible">
                        <img src="https://s1.ax1x.com/2020/07/26/apLqnH.png" alt="" className="ui rounded image" style={{width:"120px"}}/>
                        <div style={{textAlign:"center",fontSize:"12px"}}>
                            <span>扫一扫</span>
                            <p>使用手机阅读</p>
                        </div>
                    </div>
                    </CSSTransition>
                    <CSSTransition
                     in={this.state.cssdir}
                     classNames="cssdir"
                     timeout={1000}
                     unmountOnExit
                    >
                        <div className='makedir ui toc-container flowing popup left center transition visible'>
                            <ol className="js-toc">
                                {this.makeDir()}
                            </ol>
                        </div>
                    </CSSTransition>
                  


                </div>
            </div>
        )
    }
}
