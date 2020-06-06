import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user/UserState";

const Profile = () => {
  const { user, isAuthenticated } = useContext(UserContext);

  return (
    <div>
      {user.email}
      {user.firstName}   
    </div>
  )
}

export default Profile
