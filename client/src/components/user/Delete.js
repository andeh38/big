import React, { useContext } from 'react'
import { UserContext } from "../../context/user/UserState";

const Delete = () => {
  const { user, deleteUser } = useContext(UserContext);

  const onClick = (e) => {
    console.log(user._id)
    deleteUser(user.token, user._id)
  } 
  return (
    <div>
      <button onClick={onClick}></button>
    </div>
  )
}

export default Delete
