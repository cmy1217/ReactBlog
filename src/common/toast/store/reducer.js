
import {fromJS} from 'immutable'
const defaultState = fromJS({
   show:false,
   message:''
})

export default (state = defaultState,action)=>{
  
  switch(action.type){
    case 'warring':
      console.log(action);
      return state.merge({
        show:true,
        message:fromJS(action.data)
      })
    case 'warringend':
      return state.merge({
        show:false,
        message:fromJS('')
      })
    default:
      return state 
  }
  
  

 
}