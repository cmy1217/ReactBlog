
import {fromJS} from 'immutable'
const defaultState = fromJS({
   login:false
})



export default (state = defaultState,action)=>{
  
  switch(action.type){
    case 'login':
     return state.set('login',true)
    case 'logout':
    return state.set('login',false)
    default:
      return state 
  }
  
  

 
}