import React, { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";
import axios from "axios";

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  message: null,
  isAuthenticated: false,
  error: null,
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  //actions
  // register user
  async function register({ email, username, password, firstName, lastName }) {
    try {
      //headers
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({
        email,
        username,
        password,
        firstName,
        lastName,
      });

      const res = await axios.post("api/auth/register", body, config);

      dispatch({
        type: "REGISTER_SUCCESS",
        payload: res.data.message,
      });
    } catch (err) {
      dispatch({
        type: "REGISTER_FAIL",
        payload: err.response.data.message, // err.response.data.error
      });
    }
  }

  //login user
  async function login({ email, password }) {
    try {
      //headers
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      //request body
      const body = JSON.stringify({ email, password });

      const res = await axios.post("api/auth/login", body, config);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "LOGIN_FAIL",
        payload: err.response.data.message, // err.response.data.error
      });
    }
  }

  //logout
  async function logout() {
    dispatch({
      type: "LOGOUT_SUCCESS",
    });
  }

  //clear state.error
  async function errorClear() {
    dispatch({
      type: "ERROR_CLEAR",
    });
  }

  /*   // login with token
  async function loginWithToken(){

  }
 */

/*   //Delete user api/user/{id}
  async function deleteUser( token, id ) {
    try {
      //headers
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify({ token });

      const res = await axios.delete(`api/user/${id}`, body, config);

      dispatch({
        type: "DELETE_SUCCESS",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "DELETE_FAIL",
        payload: err.response.data.message, // err.response.data.error
      });
    }
  } */

  /*   async function updateUserDetails (){

  }

  async function recoverPassword(){

  } */

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        message: state.message,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        login,
        logout,
        register,
        errorClear,
        /* deleteUser, */
      }}>
      {children}
    </UserContext.Provider>
  );
};
