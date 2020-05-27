import React, { useContext } from 'react';
import { UserContext } from '../../context/user/UserState';

const Logout = () => {
  const { logout } = useContext(UserContext);

  const onClick= ()=>{
    logout()
  }

  return (
    <button onClick={onClick} href="#">
      Logout
    </button>
  );
};

export default Logout