import { FETCH_USERS, FETCH_SINGLE_USER } from "./action"

const initialState ={
  users:[],
  singleuser:[],
  loading: true,
}

const usersReducer =(state = initialState, action)=>{
  switch(action.type){
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case FETCH_SINGLE_USER:
      return{
        ...state,
        singleuser: action.payload,
        }
    default:
      return state;
  }
}

export default usersReducer;