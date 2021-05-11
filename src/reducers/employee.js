import { GET_ALL_EMPLOYES, GET_EMPLOYE, REQUEST_API, END_REQUEST } from "../actions";

const initialState = {
  employes: [],
  employe: {},
  isLoading: false
}
export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isLoading: true
      }
    case END_REQUEST:
      return {
        ...state,
        isLoading: false
      }
    case GET_ALL_EMPLOYES:
      return {
        ...state,
        employes: action.payload
      }

    case GET_EMPLOYE:
      const emp = state.employes.filter((emp)=>emp.id === action.payload);
      console.log(state.employes);
      return {
        ...state,
        employe: emp ? emp[0] : emp
      }
    default: {
      return{
        ...state
      }
    }

  }

}