import axios from 'axios'
import * as contains from './contains'
axios.defaults.baseURL='/api'
export const getDetailAction = (res)=>{
    return ({
        type:contains.GET_DETAILS,
        data:res
    })
}

export const CleraForm = ()=>{
    return ({
        type:contains.CLEAR_FROM,
        
    })
}

export const putTeaxtare = (e)=>{
    return ({
        type:'chang_input',
        data:e
    })
}

export const getMessage = (res)=>{
    return ({
        type:'User_message',
        data:res.data
    })
}

export const PutMessage = (data)=>{
    return (dispatch)=>{
        
        axios.post('/message',data).then(res=>{    
            const action = GetDetail(data.d)
            dispatch(action)
        })
    }
}

export const GetDetail = (id)=>{
    return (dispatch)=>{
        axios.get('/detail?id='+id).then(res=>{
           
             const content = res.data.data[0]         
             const info = res.data.info
             const n = {content,info}
             const action = getDetailAction(n)
             dispatch(action)
        })
    }
}