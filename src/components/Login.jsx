import React from "react";
import input from "./Input";

function Login() {
  return (
    <form className="form">
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  );
}
export default Login;
