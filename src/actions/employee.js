import {GET_ALL_EMPLOYES,GET_EMPLOYE,REQUEST_API,END_REQUEST} from "./";
import axios from "axios"
const getAllEmployeeApi = `http://dummy.restapiexample.com/api/v1/employees`
export const allEmployee = (payload)=>{
  return {
    type:GET_ALL_EMPLOYES,
    payload
  }
}

export const employeeDetail = (payload)=>{
  return {
    type:GET_EMPLOYE,
    payload
  }
}

export const requestAPI = () =>{
  return {
    type:REQUEST_API,
  }
}

export const endRequestAPI =()=>{
  return {
    type:END_REQUEST
  }
}


export const getAllEmployee =() =>{
  return function(dispatch){
    dispatch(requestAPI);
    return axios.get(getAllEmployeeApi)
    .then(({data}) =>{
      dispatch(allEmployee(data.data));    
    })
    .catch(e =>{
      console.log(e); 
    }).finally(()=>{
      dispatch(endRequestAPI);
    })
  }
}