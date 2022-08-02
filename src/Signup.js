import React from "react";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signuphandler = async (e) => {
    console.log(email, password);
    e.preventDefault();
    if (email === "" || password === "") {
      toast("Please Fill all the fields");
    } else {
      await axios
        .post("http://localhost:5000/api/user/signup", {
          email: email,
          password: password,
        })
        .then((response) => {
          if (response.data.message === "User Created Successfully") {
            toast("User Created Successfully, Please Login!");
          } else {
            toast(response.data.message);
          }
        });
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="Auth-form-container" style={{ height: "600px" }}>
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={signuphandler}
              >
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Already Have Account? <Link to="/login">Login?</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
