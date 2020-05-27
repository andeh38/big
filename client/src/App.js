import React from "react";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Logout from "./components/user/Logout";

import { UserProvider } from "./context/user/UserState";

function App() {
  return (
    <UserProvider>
      {/* <AppNavbar></AppNavbar> */}
        <Login></Login>
        <Register></Register>
        <Logout></Logout>
    </UserProvider>
  );
}

export default App;
