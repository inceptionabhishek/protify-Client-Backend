import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "react-bootstrap/Form";
import { CgInsertBeforeO } from "react-icons/cg";
import { IoMdArrowRoundBack } from "react-icons/io";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
function Dashboard() {
  const [name, setName] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [aboutme, setAboutme] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [description, setDescription] = useState("");
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    axios
      .post("http://localhost:5000/api/homepage/get/data", {
        findid: localStorage.getItem("userid"),
      })
      .then((result) => {
        console.log("gg");
        result = result.data.data;
        setName(result.Name);
        setCurrentTitle(result.currentTitle);
        setAboutme(result.aboutme);
        setCollegeName(result.collegeData.name);
        setDescription(result.collegeData.description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [projectshow, projectsetShow] = useState(false);
  const projecthandleShow = (event) => {
    event.preventDefault();
    projectsetShow(true);
  };
  const projecthandleClose = (event) => {
    //event.preventDefault();
    projectsetShow(false);
  };
  const [projectAddName, setProjectAddName] = useState("");
  const [projectAddDesc, setProjectAddDesc] = useState("");
  const [projectAddPic, setProjectAddPic] = useState("");
  const [projectAddLink, setProjectAddLink] = useState("");
  const [projectAddTechStacks, setProjectAddTechStacks] = useState("");
  const projecthandleCloseWithSave = () => {
    axios
      .post("http://localhost:5000/api/projects/add", {
        findid: localStorage.getItem("userid"),
        Name: projectAddName,
        link: projectAddLink,
        pic: "www.img122.src",
        description: projectAddDesc,
        techstacks: projectAddTechStacks,
      })
      .then((result) => {
        console.log(result);
        if (loader === false) {
          setLoader(true);
        } else {
          setLoader(false);
        }
        if (bool === false) {
          setbool(true);
        } else {
          setbool(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    projectsetShow(false);
  };
  const [editshow, setEditShow] = useState(false);
  const editHandleShow = (e) => {
    e.preventDefault();
    setEditShow(true);
  };
  const editHandleClose = (event) => {
    //event.preventDefault();
    setEditShow(false);
  };
  const editHandleCloseWithSave = () => {
    const api = "http://localhost:5000/api/projects/update";
    axios
      .post(api, {
        Name: projectEditName,
        link: projectEditLink,
        description: projectEditDesc,
        findid: localStorage.getItem("userid"),
        techstacks: projectEditTechStacks,
        projectid: localStorage.getItem("editprojectid"),
      })
      .then((result) => {
        console.log(result);
        if (loader === false) {
          setLoader(true);
        } else {
          setLoader(false);
        }
        if (bool === false) {
          setbool(true);
        } else {
          setbool(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setEditShow(false);
  };
  const [bool, setbool] = useState(true);
  var [projectArray, setProjectArray] = useState([]);
  const [projectEditName, setProjectEditName] = useState("");
  const [projectEditDesc, setProjectEditDesc] = useState("");
  const [projectEditPic, setProjectEditPic] = useState("");
  const [projectEditLink, setProjectEditLink] = useState("");
  const [projectEditTechStacks, setProjectEditTechStacks] = useState("");
  useEffect(() => {
    axios
      .post("http://localhost:5000/api/projects/get", {
        findid: localStorage.getItem("userid"),
      })
      .then((result) => {
        console.log(result);
        setProjectArray(result.data.Data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [editshow, projectshow, bool, loader]);
  useEffect(() => {
    const api = "http://localhost:5000/api/projects/get/single";
    axios
      .post(api, { projectid: localStorage.getItem("editprojectid") })
      .then((result) => {
        console.log(result);
        result = result.data;
        setProjectEditName(result.Name);
        setProjectEditLink(result.link);
        setProjectEditPic(result.pic);
        setProjectEditDesc(result.description);
        setProjectEditTechStacks(result.techstacks);
        setTimeout(() => {}, 3000);
        setLoader(false);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [bool, loader]);

  const updateUserInfoHandle = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/homepage/update/data", {
        Name: name,
        currentTitle: currentTitle,
        aboutme: aboutme,
        picture: "img/1src",
        collegeData: {
          name: collegeName,
          description: description,
          startingDate: "20-06-2020",
          endingDate: "Present",
        },
        findid: localStorage.getItem("userid"),
        resume: "www.djdjdj.com",
      })
      .then((result) => {
        if (bool === true) {
          setbool(false);
        } else {
          setbool(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <ToastContainer />
      <div className="Auth-form-container">
        <form className="Auth-form">
          <Link to="/">
            <button className="HomePage-Go">
              <IoMdArrowRoundBack />
              Homepage
            </button>
          </Link>
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
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="form-group mt-3">
              <label>Current Title🙎</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Intern.., software devloper.."
                value={currentTitle}
                onChange={(e) => {
                  setCurrentTitle(e.target.value);
                }}
              />
            </div>
            <div className="form-group mt-3">
              <label>About Me😎</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Write about Your self"
                value={aboutme}
                onChange={(e) => {
                  setAboutme(e.target.value);
                }}
              />
            </div>
            <button
              className="HomePage-Go"
              style={{ width: "120px", marginTop: "20px" }}
              onClick={updateUserInfoHandle}
            >
              Update
            </button>
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
                value={collegeName}
                onChange={(e) => {
                  setCollegeName(e.target.value);
                }}
              />
            </div>
            <div className="form-group mt-3">
              <label>Add Description 🙉</label>
              <Form.Control
                as="textarea"
                placeholder="Write about your college Life, achievement"
                rows={3}
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <button
              className="HomePage-Go"
              style={{ width: "120px", marginTop: "20px" }}
              onClick={updateUserInfoHandle}
            >
              Update
            </button>
            <h3
              className="Top-Heading"
              style={{ fontSize: "20px", marginTop: "20px" }}
            >
              Projects
            </h3>
            {projectArray.length > 0 ? (
              <>
                <p className="hint">Added Projects</p>
              </>
            ) : (
              <></>
            )}
            {projectArray.map((project, index) => {
              return (
                <>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={project.pic} />
                    <Card.Body>
                      <Card.Title>Name : {project.Name}</Card.Title>
                      <Card.Text>Description : {project.description}</Card.Text>
                      <Card.Text>Link : {project.link}</Card.Text>
                      <Card.Text>TechStacks : {project.techstacks}</Card.Text>
                      <button
                        className="HomePage-Go"
                        style={{ width: "90px" }}
                        onClick={(e) => {
                          e.preventDefault();
                          console.log(project._id);
                          localStorage.setItem("editprojectid", project._id);

                          setLoader(true);
                          setEditShow(true);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="HomePage-Go"
                        style={{ width: "90px", backgroundColor: "red" }}
                        onClick={(e) => {
                          e.preventDefault();
                          axios
                            .post("http://localhost:5000/api/projects/delete", {
                              id: project._id,
                            })
                            .then((result) => {
                              console.log(result);
                              if (loader === false) {
                                setLoader(true);
                              } else {
                                setLoader(false);
                              }
                              if (bool === false) {
                                setbool(true);
                              } else {
                                setbool(false);
                              }
                            })
                            .catch((err) => {
                              console.log(err);
                            });
                        }}
                      >
                        Delete
                      </button>
                    </Card.Body>
                  </Card>
                  <br />
                </>
              );
            })}
            <button
              className="HomePage-Go"
              style={{ width: "120px", marginTop: "20px" }}
              onClick={projecthandleShow}
            >
              Add Project
            </button>
            <Modal show={projectshow} onHide={projecthandleClose}>
              <Modal.Header closeButton>
                <Modal.Title className="Top-Heading">Add Project</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="form-group mt-3">
                  <label>Name Of Project 🔫</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Name like portify,.."
                    onChange={(e) => {
                      setProjectAddName(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Add Link 🎁</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="github,..bitbucket.."
                    onChange={(e) => {
                      setProjectAddLink(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Add Description 🔥</label>
                  <Form.Control
                    as="textarea"
                    placeholder="Describe Project"
                    rows={3}
                    onChange={(e) => {
                      setProjectAddDesc(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>TechStacks Used 🚗</label>
                  <Form.Control
                    as="textarea"
                    placeholder="Like ReactJS, MERN, NODE,..."
                    rows={3}
                    onChange={(e) => {
                      setProjectAddTechStacks(e.target.value);
                    }}
                  />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button
                  onClick={projecthandleClose}
                  className="HomePage-Go"
                  style={{ width: "70px" }}
                >
                  Close
                </button>
                <button
                  onClick={projecthandleCloseWithSave}
                  className="HomePage-Go"
                  style={{ width: "70px" }}
                >
                  Save Changes
                </button>
              </Modal.Footer>
            </Modal>

            <Modal show={editshow} onHide={editHandleClose}>
              <Modal.Header closeButton>
                <Modal.Title className="Top-Heading">Edit Project</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {loader ? (
                  <>
                    <div className="Loader">
                      <Spinner animation="border" variant="warning" />
                      <p className="Loader-Hint">Fetching Details....</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="form-group mt-3">
                      <label>Name Of Project 🔫</label>
                      <input
                        type="text"
                        className="form-control mt-1"
                        placeholder="Name like portify,.."
                        value={projectEditName}
                        onChange={(e) => {
                          setProjectEditName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label>Add Link 🎁</label>
                      <input
                        type="text"
                        className="form-control mt-1"
                        placeholder="github,..bitbucket.."
                        value={projectEditLink}
                        onChange={(e) => {
                          setProjectEditLink(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label>Add Description 🔥</label>
                      <Form.Control
                        as="textarea"
                        placeholder="Describe Project"
                        rows={3}
                        value={projectEditDesc}
                        onChange={(e) => {
                          setProjectEditDesc(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label>TechStacks Used 🚗</label>
                      <Form.Control
                        as="textarea"
                        placeholder="Like ReactJS, MERN, NODE,..."
                        rows={3}
                        value={projectEditTechStacks}
                        onChange={(e) => {
                          setProjectEditTechStacks(e.target.value);
                        }}
                      />
                    </div>
                  </>
                )}
              </Modal.Body>
              <Modal.Footer>
                <button
                  onClick={editHandleClose}
                  className="HomePage-Go"
                  style={{ width: "70px" }}
                >
                  Close
                </button>
                <button
                  onClick={editHandleCloseWithSave}
                  className="HomePage-Go"
                  style={{ width: "70px" }}
                >
                  Save Changes
                </button>
              </Modal.Footer>
            </Modal>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Deploy
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Dashboard;
