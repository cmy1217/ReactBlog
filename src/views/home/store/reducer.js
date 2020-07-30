
import {fromJS} from 'immutable'
const defaultState = fromJS({
    isNight:false,
    homeInfo:[],
    count:0,
    leaveMessage:[]
})

const getHome = (state,action)=>{
 
  return state.merge({
    homeInfo:fromJS(action.data.data),
    count:fromJS(Math.ceil(action.data.data.length/4)),
    leaveMessage:fromJS(action.data.info)
  })
}

export default (state = defaultState,action)=>{
  
  switch(action.type){
    case 'get_home_data':
    
      return getHome(state,action)
    
    
    case 'change_light':
      
      return state.set('isNight',!state.get('isNight'))
    
    default:
      return state 
  }
  
  

 
}