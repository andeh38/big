import React, { useState, useContext } from "react";
import { UserContext } from "../../context/user/UserState";

const Register = () => {
  const { register, error, message, isAuthenticated } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      email,
      username,
      password,
      firstName,
      lastName,
    };

    register(newUser);
  };

  return (
    <div>
      {message ? <div color="danger">{message}</div> : null}
      {error ? <div color="danger">{error}</div> : null}
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
        <label for="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          className="mb-3"
          autoComplete="username"
          onChange={(e) => setUsername(e.target.value)}></input>
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="mb-3"
          autoComplete="current-password"
          minlength="6"
          onChange={(e) => setPassword(e.target.value)}></input>
        <label for="firstname">Firstname</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="firstname"
          className="mb-3"
          autoComplete="firstname"
          onChange={(e) => setFirstName(e.target.value)}></input>
        <label for="lastname">Lastname</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="lastname"
          className="mb-3"
          autoComplete="lastname"
          onChange={(e) => setLastName(e.target.value)}></input>
        <button color="dark" style={{ marginTop: "2rem" }} block>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
