import {LOGIN_REQUEST,LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT} from "../actions"

const initialState = {
  isSubmitted:false,
  isLogin: !!localStorage.getItem("user"),
  user:JSON.parse(localStorage.getItem("user")) || {},
  loginFailed : null
}

export default (state = initialState,action) =>{
  switch(action.type){
    case LOGIN_REQUEST:
    return {
      ...state,
      isSubmitted:true
    }
    case LOGIN_SUCCESS:
      return {
        ...state,
        user:action.payload,
        isLogin:true,
        loginFailed:null
      }
    case LOGIN_FAIL:
        return {
          ...state,
          user:null,
          loginFailed:action.payload
        }
    case LOGOUT:
      return {
        ...state,
        isLogin:false,
        user:null,
        loginFailed:null
      }
    default :
    return state;
  }
}