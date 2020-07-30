import React,{Component}from 'react';
import {connect} from 'react-redux'
import {LoginWrapper,LoginBox,Input,Button,LoginA} from './style'
import {login} from './store/creatAction'
import {Redirect} from 'react-router-dom'
import Toast from '../../common/toast'
class Login extends Component{
    render(){
       
          if(!this.props.Islogin){
            return( 
              <LoginWrapper>
                
              <LoginBox>
                <LoginA>登录</LoginA>
                <Input style={{"borderBottom":"none"}}   placeholder='手机号或邮箱' ref={(input)=>{this.account=input}}/>
                <Input  placeholder='密码' ref={(input)=>{this.password=input}} type="password" />
                <Button onClick={()=>{this.props.login(this.account,this.password)}}>登录</Button>
              </LoginBox>
              <Toast></Toast>
            </LoginWrapper>)
          }else{
            return(
              <Redirect to="/"></Redirect>
            )
          }
        
        
         
        
    }
    componentDidMount(){
    }
}

const mapState = (state)=>{
    return({
      Islogin:state.getIn(['login','login'])
    })
}

const mapDispath = (dispatch)=>{
  return({
    login(account,password){
     
      dispatch(login(account.value,password.value))
    }
  })
}
export default connect(mapState,mapDispath)(Login)
