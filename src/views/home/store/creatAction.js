import axios from 'axios'
import {GET_HOME_DATA} from './contains'
axios.defaults.baseURL = '/api'
export const GetHomeAction = (res)=>{
    return (
        {
            type:GET_HOME_DATA,
            data:res.data
          }
    )
}






export const GetHomeData = ()=>{
    return  (dispatch)=>{
       
        axios.get('/home').then(res=>{
            
            dispatch(GetHomeAction(res))
           
          }).catch(err=>{
              console.log(err);
          })
    }
}

