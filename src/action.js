import axios from 'axios'
 
export const FETCH_USERS = "FETCH_USERS"
export const FETCH_SINGLE_USER = "FETCH_SINGLE_USER"

export const fetchUsers = () => dispatch => {
  return axios.get('https://reqres.in/api/users')
  .then(response=> (
    dispatch({type: FETCH_USERS, 
    payload: response.data.data}
    )))
 }

 export const fetchSingleUser = (id) => dispatch => {
    return axios.get(`https://reqres.in/api/users/${id}`)
    .then(response=>( 
        dispatch({type: FETCH_SINGLE_USER,
        payload: response.data.data})
    ))
 }
