import {GET_USERS,CREATE_USERS,UPDATE_USER,DELETE_USER} from '../types'

const initialState = {
    user:{}
}

export default function(state = initialState, action){
     switch(action.type){
        case GET_USERS:
            return { user:action.payload };
        case CREATE_USERS:
            return { user:action.payload };
        case UPDATE_USER:
            return { user:action.payload };
        case DELETE_USER:
            return {user:{}}   
        default: return state
    }

}