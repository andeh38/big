import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user/UserState";

const Login = () => {
  const { login, error, isAuthenticated } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const User = {
      email,
      password,
    };
    login(User);
  };

  useEffect(() => {
    if (isAuthenticated) console.log("logged in");
  });

  return (
    <div className="section">
      {error ? <div style={{ backgroundColor: "red" }}>{error}</div> : null}
      <form onSubmit={onSubmit}>
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          className="mb-3"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}></input>
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="mb-3"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}></input>
        <button color="dark" style={{ marginTop: "2rem" }} block>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
