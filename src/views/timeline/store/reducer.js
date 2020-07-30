
import {fromJS} from 'immutable'
const defaultState = fromJS({
  line:[]
})



export default (state = defaultState,action)=>{
  
  switch(action.type){
    case 'timeline':
      return state.set('line',action.data)
    default:
      return state 
  }
  
  

 
}