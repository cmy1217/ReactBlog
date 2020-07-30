import axios from 'axios';
axios.defaults.baseURL='/api'
const LoginAction = ()=>{
    return({
        type:'login'
    })
}

export const LogoutAction = ()=>{
    return(
        {
            type:'logout'
        }
    )
}

export const login = (account,password)=>{  
    return(dispatch)=>{
        axios.post(`/login`,{account:`${account}`,password:`${password}`}).then(res=>{
            console.log(res);
           if(res.data.success){
            dispatch(LoginAction())
           }else{
               const message = res.data
               const action = {
                   type:'warring',
                   data:message
               }
               dispatch(action)
               setTimeout(()=>{
                const action = {
                    type:'warringend',
                  
                }
                dispatch(action)
               },1500)
           }
           
        }
        )
    }
}