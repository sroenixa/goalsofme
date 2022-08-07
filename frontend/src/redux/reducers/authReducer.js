import {LOGIN,LOGOUT} from '../types'

const initialState = {
    auth: {},
    loading:true
}

export default function(state = initialState, action){
     switch(action.type){
        case LOGIN:
            return {auth: action.payload,loading:false};
        case LOGOUT:
            return {auth: {},loading:false};   
        default: return state
    }
}