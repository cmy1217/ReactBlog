
import {fromJS} from 'immutable'
const defaultState = fromJS({
  textvalue:'',
  username:'',
  emali:'',
  userCom:[],
  useMap:[],
  timer:'',
  md:''
})



export default (state = defaultState,action)=>{
  
  switch(action.type){
    case 'get_detail':
      
      return state.merge({
        md:fromJS(action.data.content.md),
        useMap:fromJS(action.data.info),
        timer:fromJS(action.data.content.timer),
        textvalue:fromJS(''),
        username:fromJS(''),
        emali:fromJS(''),
        
      })

    case 'clear_from':
      return state.merge({
        textvalue:fromJS('')
      })

   case 'chang_input':
     return state.merge({
       textvalue:fromJS(action.data)
     })

   case 'user_name':
    return state.merge({
      username:fromJS(action.data)
    })

  case 'email':
    return state.merge({
      emali:fromJS(action.data)
    })
  
  case 'User_message':
    return state.merge({
      userCom:fromJS(action.data),
      
    })
    default:
      return state 
  }
  
  

 
}