import React from 'react'
import { useSelector } from 'react-redux';

const Card = () => {
  
  const singleuser = useSelector(state => state.singleuser)

  return ( 
    <div className ="card">
    {singleuser.id ?  (
    <div key={singleuser.id}>
    <img src = {singleuser.avatar} alt="avatar" />
    <h3>First Name: {singleuser.first_name}</h3>
    <h3>Last Name: {singleuser.last_name}</h3>
    <p>Email: {singleuser.email}</p>
    </div>
    ):(<p>Click on the button to display user info</p>)
    }
    </div>
  )
}

export default Card