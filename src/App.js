import './App.css'
import Card from './Card';

import { useSelector, useDispatch } from 'react-redux'
import { fetchSingleUser, fetchUsers } from './action'
import { useEffect } from "react";

export default function App() {
  const users = useSelector(state=> state.users)
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch();
  
  useEffect(()=> {
    dispatch(fetchUsers());
  },[])
  
  if(loading) return <p>API request in progress...</p>
  return (
    <div className="App">
      <Card />
      <div className="btncontainer">
      {users.map((user) => (
      <button key={user.id} onClick={()=> dispatch(fetchSingleUser(user.id))}>{user.id}</button>
      ))}
      </div>
    </div>
  );
}
