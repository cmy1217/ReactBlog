import axios from 'axios'

axios.defaults.baseURL='/api'

export const getAction = (data)=>{
    const action  = {
        type:'timeline',
        data
    }
    return action
}

export const setAxios = ()=>{
    return (dispatch)=>{
        axios.get('/line').then(res=>{
            dispatch(getAction(res.data))
        })
    }
}