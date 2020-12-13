import React from "react";
import { Link } from "react-router-dom";
import { signup } from "./requests";
import "./Signup.css";
function Signup() {
  const redirect = async function (e) {
    e.preventDefault();
    try {
      await signup(e);
      const name = localStorage.getItem("name");
      const DOB = localStorage.getItem("DOB");
      const phone = localStorage.getItem("phone");
      const email = localStorage.getItem("email");
      if (name) {
        alert(`Sign up In Successful
        name : ${name}
        DOB : ${DOB}
        phone : ${phone}
        Email : ${email}`);
      } else {
        alert(`Invalid Credentials`);
      }
      localStorage.clear();
    } catch (err) {
      alert(`Invalid Credentials`);
    }
  };
  return (
    <div className="signup">
      <div className="signup__container">
        <form>
          <p className="signup__legend center">Hello new User!</p>

          <div className="signup__name center">
            Name
            <input type="text" name="name" required></input>
          </div>

          <div className="signup__email center">
            Email
            <input type="email" name="email" required></input>
          </div>

          <div className="signup__phone center">
            Phone
            <input type="text" name="phone" maxLength="10" required></input>
          </div>

          <div className="signup__dob center">
            DOB
            <input type="date" name="DOB" required></input>
          </div>

          <div className="signup__password center">
            Password
            <input type="password" name="password" required></input>
          </div>

          <div className="signup__confPassword center">
            Confirm Password
            <input type="password" name="confPassword" required></input>
          </div>

          <div className="signup__button center">
            <button onClick={redirect}>Signup</button>
          </div>
        </form>
        <p className="signup__login center">
          Already an User? <Link to="/home"> Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
