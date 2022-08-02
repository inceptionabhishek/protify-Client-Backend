import React from "react";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "react-bootstrap/Form";
import { CgInsertBeforeO } from "react-icons/cg";
var projectArray = [
  {
    findid: localStorage.getItem("userid"),
    Name: "",
    link: "",
    pic: "",
    description: "",
  },
];
function Dashboard() {
  return (
    <>
      <ToastContainer />
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3
              className="Top-Heading"
              style={{ fontSize: "20px", marginTop: "20px" }}
            >
              About YourSelf
            </h3>
            <div className="form-group mt-3">
              <label>Name💤</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Name"
              />
            </div>
            <div className="form-group mt-3">
              <label>Current Title🙎</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Intern.., software devloper.."
              />
            </div>
            <div className="form-group mt-3">
              <label>About Me😎</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Write about Your self"
              />
            </div>
            <h3
              className="Top-Heading"
              style={{ fontSize: "20px", marginTop: "20px" }}
            >
              College Data
            </h3>
            <div className="form-group mt-3">
              <label>College Name 😪</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="MIT,IIT,.."
              />
            </div>
            <div className="form-group mt-3">
              <label>Add Description 🙉</label>
              <Form.Control
                as="textarea"
                placeholder="Write about your college Life, achievement"
                rows={3}
              />
            </div>
            <h3
              className="Top-Heading"
              style={{ fontSize: "20px", marginTop: "20px" }}
            >
              Projects
              <CgInsertBeforeO
                onClick={() => {
                  var obj = {
                    findid: localStorage.getItem("userid"),
                    Name: "",
                    link: "",
                    pic: "",
                    description: "",
                  };
                  obj = JSON.parse(obj);
                  projectArray.push(...obj);
                }}
              />
            </h3>

            {projectArray.map((project, index) => {
              return (
                <>
                  <div className="form-group mt-3">
                    <label>Name Of Project 🔫</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="Name like portify,.."
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Add Link 🎁</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="github,..bitbucket.."
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Add Description 🔥</label>
                    <Form.Control
                      as="textarea"
                      placeholder="Describe Project"
                      rows={3}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>TechStacks Used 🚗</label>
                    <Form.Control
                      as="textarea"
                      placeholder="Like ReactJS, MERN, NODE,..."
                      rows={3}
                    />
                  </div>
                </>
              );
            })}
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Dashboard;
