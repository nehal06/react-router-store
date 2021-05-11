import {LOGIN_REQUEST,LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT} from "./"


export const login = ({ username, password }) => { 
 
  return dispatch => {
    dispatch(loginRequest());
      
      return new Promise((resolve,reject) =>{
        if(username === "admin" && password === "admin"){
          console.log("resolve:")
          localStorage.setItem("user",JSON.stringify({username}));
          resolve({username});
         
        }
        else{ 
          if(localStorage.getItem("user")){
            localStorage.removeItem("user");
          }
          reject(new Error("Invalid Credential"));
         
        }
      })
      .then(res => {
        dispatch(loginSuccess(res));
      })
      .catch(err => {
        let payload ={
          message:err.message
        }
        dispatch(loginFail(payload));
      });
  };
};

export const loginRequest =()=>{
  return {
    type : LOGIN_REQUEST
  }
}

export const loginSuccess = (payload) =>{
  return{
    type : LOGIN_SUCCESS,
    payload
  }
}

export const loginFail = (payload) =>{
  return{
    type : LOGIN_FAIL,
    payload
  }
}
export const logout = () =>{
  localStorage.removeItem("user");
  return{
    type : LOGOUT    
  }
}