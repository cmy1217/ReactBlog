import { combineReducers } from 'redux-immutable'
import header from '../common/header/store/reducer'
import {home} from '../views/home/store' 
import detail from '../views/detail/store'
import login from '../views/login/store'
import toast from '../common/toast/store/reducer'
import timeline from '../views/timeline/store/index'
export default  combineReducers({
    header,
    home,
    detail,
    login,
    toast,
    timeline
})

