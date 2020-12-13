import React from "react";
import "./Login.css";
import { login } from "./requests";
function Login() {
  const redirect = async function (e) {
    e.preventDefault();
    try {
      await login(e);
      const name = localStorage.getItem("name");
      const DOB = localStorage.getItem("DOB");
      const phone = localStorage.getItem("phone");
      const email = localStorage.getItem("email");
      if (name) {
        alert(`Logged In Successful
        name : ${name}
        DOB : ${DOB}
        phone : ${phone}
        Email : ${email}`);
      } else {
      }
      localStorage.clear();
    } catch (err) {
      alert("Invalid Credential. Try again");
    }
  };
  return (
    <div className="login">
      <div className="login__container">
        <form>
          <p className="login__legend">Hello User!</p>

          <div className="login__email">
            Email
            <input type="email" name="email"></input>
          </div>

          <div className="login__password">
            Password
            <input type="password" name="password"></input>
          </div>

          <div className="login__button">
            <button type="submit" onClick={redirect}>
              Login
            </button>
          </div>
        </form>
        <p className="login__signup">
          New User? <a href="/signup">Signup</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
