import React from "react";
import { GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import ProgressBar from "react-animated-progress-bar";
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
import { FiEdit2 } from "react-icons/fi";
import { BsUpload } from "react-icons/bs";
import { FcDocument } from "react-icons/fc";
function Dashboard() {
  const [stateChange, setStateChange] = useState(false);
  /*
  LINKS : section START : ------------------------------------------------------
  */
  const [Linksarr, setLinksArr] = useState([]);
  const [linkname, setLinksName] = useState("");
  const [link, setlink] = useState("");
  const [linkshow, setlinkShow] = useState(false);
  const handlelinkClose = () => setlinkShow(false);
  const handlelinkShow = () => setlinkShow(true);
  const handlelinkClosewithsave = () => {
    axios
      .post("http://localhost:5000/api/links/add", {
        findid: localStorage.getItem("userid"),
        Name: linkname,
        link: link,
        pic: "www.img1.src",
      })
      .then((result) => {
        if (stateChange === false) {
          setStateChange(true);
        } else {
          setStateChange(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setlinkShow(false);
  };
  useEffect(() => {
    axios
      .post("http://localhost:5000/api/links/get", {
        findid: localStorage.getItem("userid"),
      })
      .then((result) => {
        setLinksArr(result.data.Data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Linksarr, stateChange]);

  /*
  LINKS : section END : ------------------------------------------------------
  */
  /*
  EXPERIENCE : Section START:----------------------------------------------------
  */
  const [experiencearr, setExperiencearr] = useState([]);
  const [experienceshow, setexperienceShow] = useState(false);
  const handleexperienceClose = () => setexperienceShow(false);
  const handleexperienceShow = () => setexperienceShow(true);
  const [companyName, setCompanyName] = useState("");
  const [experienceType, setExperienceType] = useState("");
  const [duration, setDuration] = useState("");
  const [experiencedescription, setexperienceDescription] = useState("");
  const [expericencetechstacks, setExperienceTechStacks] = useState("");
  const [CertificateLink, setCertificateLink] = useState("");

  const [experienceeditshow, setexperienceeditShow] = useState(false);
  const handleexperienceeditClose = () => setexperienceeditShow(false);
  const handleexperienceeditShow = () => setexperienceeditShow(true);
  const [experienceeditType, setExperienceeditType] = useState("");
  const [companyedit, setcompanyedit] = useState("");
  const [durationedit, setdurationedit] = useState("");
  const [experiencedescriptionedit, setexperienceDescriptionedit] =
    useState("");
  const [experienceedittechstacks, setExperienceEditTechstacks] = useState("");
  const [Certificatelinkedit, setcertificatelinkdedit] = useState("");

  const handleexperienceeditClosewithSave = () => {
    axios
      .post("http://localhost:5000/api/experience/update", {
        type: experienceeditType,
        company: companyedit,
        duration: durationedit,
        startingDate: "12-12-2021",
        endingDate: "present",
        description: experiencedescriptionedit,
        techstacksused: experienceedittechstacks,
        douments: Certificatelinkedit,
        findid: localStorage.getItem("userid"),
        experienceid: localStorage.getItem("experienceeditid"),
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    setexperienceeditShow(false);
  };
  const handleexperienceClosewithSave = () => {
    axios
      .post("http://localhost:5000/api/experience/add", {
        type: experienceType,
        company: companyName,
        duration: duration,
        startingDate: "12-12-2021",
        endingDate: "present",
        description: experiencedescription,
        techstacksused: expericencetechstacks,
        douments: CertificateLink,
        findid: localStorage.getItem("userid"),
      })
      .then((result) => {
        if (stateChange === false) {
          setStateChange(true);
        } else {
          setStateChange(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setexperienceShow(false);
  };
  useEffect(() => {
    const api = "http://localhost:5000/api/experience/get";
    axios
      .post(api, {
        findid: localStorage.getItem("userid"),
      })
      .then((result) => {
        setExperiencearr(result.data.Data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [stateChange, experiencearr]);

  /*
  EXPERIENCE : Section END:----------------------------------------------------
  */
  const [projectTempImage, setProjectTempImage] = useState("");
  const [upload, setUpload] = useState(false);
  const [imageUpload, setImageUpload] = useState("");
  const [picshow, setpicShow] = useState(false);
  const handleClose = () => setpicShow(false);
  const handleShow = () => setpicShow(true);
  const [state, setState] = useState(false);
  const [name, setName] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [aboutme, setAboutme] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  const [loader, setLoader] = useState(false);
  const [projectshow, projectsetShow] = useState(false);
  const [projectAddName, setProjectAddName] = useState("");
  const [projectAddDesc, setProjectAddDesc] = useState("");
  const [projectAddPic, setProjectAddPic] = useState("");
  const [projectAddLink, setProjectAddLink] = useState("");
  const [projectAddTechStacks, setProjectAddTechStacks] = useState("");
  const [editshow, setEditShow] = useState(false);
  const [bool, setbool] = useState(true);
  var [projectArray, setProjectArray] = useState([]);
  const [projectEditName, setProjectEditName] = useState("");
  const [projectEditDesc, setProjectEditDesc] = useState("");
  const [projectEditPic, setProjectEditPic] = useState("");
  const [projectEditLink, setProjectEditLink] = useState("");
  const [projectEditTechStacks, setProjectEditTechStacks] = useState("");
  const editHandleShow = (e) => {
    e.preventDefault();
    setEditShow(true);
  };
  const editHandleClose = (event) => {
    //event.preventDefault();
    setEditShow(false);
  };
  const projecthandleShow = (event) => {
    event.preventDefault();
    projectsetShow(true);
  };
  const projecthandleClose = (event) => {
    //event.preventDefault();
    projectsetShow(false);
  };
  useEffect(() => {
    axios
      .post("http://localhost:5000/api/homepage/get/data", {
        findid: localStorage.getItem("userid"),
      })
      .then((result) => {
        if (result.data.data === null) {
          setState(true);
        }

        result = result.data.data;
        setName(result.Name);
        setCurrentTitle(result.currentTitle);
        setAboutme(result.aboutme);
        setCollegeName(result.collegeData.name);
        setDescription(result.collegeData.description);
        if (result.picture !== null) {
          setPicture(result.picture);
        } else {
          setPicture(
            "https://res.cloudinary.com/dkeiewkz6/image/upload/v1650937444/ykjfqvinxyctr1q4v0mh.png"
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [bool, upload]);
  useEffect(() => {
    axios
      .post("http://localhost:5000/api/experience/get/single", {
        experienceid: localStorage.getItem("experienceeditid"),
      })
      .then((result) => {
        console.log("experinence", result);
        setcompanyedit(result.data.company);
        setExperienceeditType(result.data.type);
        setexperienceDescriptionedit(result.data.description);
        setdurationedit(result.data.duration);
        setExperienceEditTechstacks(result.data.techstacksused);
        setcertificatelinkdedit(result.data.douments);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loader]);
  const ProjectImageHandlerUpdate = async (e) => {
    e.preventDefault();
    setUpload(true);
    const formData = new FormData();
    formData.append("file", projectTempImage);
    formData.append("upload_preset", "CheggClone");
    formData.append("cloud_name", "dkeiewkz6");
    await fetch("https://api.cloudinary.com/v1_1/dkeiewkz6/image/upload", {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setProjectEditPic(data.url);
        setUpload(false);
        // axios
        //   .post("http://localhost:5000/api/projects/update", {
        //     findid: localStorage.getItem("userid"),
        //     Name: projectAddName,
        //     link: projectAddLink,
        //     pic: data.url,
        //     description: projectAddDesc,
        //     techstacks: projectAddTechStacks,
        //     projectid: localStorage.getItem("editprojectid"),
        //   })
        //   .then((result) => {
        //     console.log(result);
        //     setUpload(false);
        //     if (loader === false) {
        //       setLoader(true);
        //     } else {
        //       setLoader(false);
        //     }
        //     if (bool === false) {
        //       setbool(true);
        //     } else {
        //       setbool(false);
        //     }
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
        // projectsetShow(false);
      });
  };
  const ProjectImageHandler = async (e) => {
    e.preventDefault();
    setUpload(true);
    const formData = new FormData();
    formData.append("file", projectTempImage);
    formData.append("upload_preset", "CheggClone");
    formData.append("cloud_name", "dkeiewkz6");
    await fetch("https://api.cloudinary.com/v1_1/dkeiewkz6/image/upload", {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setProjectEditPic(data.url);
        axios
          .post("http://localhost:5000/api/projects/add", {
            findid: localStorage.getItem("userid"),
            Name: projectAddName,
            link: projectAddLink,
            pic: data.url,
            description: projectAddDesc,
            techstacks: projectAddTechStacks,
          })
          .then((result) => {
            console.log(result);
            setUpload(false);
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
      });
  };
  const projecthandleCloseWithSave = () => {
    axios
      .post("http://localhost:5000/api/projects/add", {
        findid: localStorage.getItem("userid"),
        Name: projectAddName,
        link: projectAddLink,
        pic: picture,
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
        pic: projectEditPic,
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
  const HandlerFunction = async (e) => {
    setUpload(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", imageUpload);
    formData.append("upload_preset", "CheggClone");
    formData.append("cloud_name", "dkeiewkz6");
    await fetch("https://api.cloudinary.com/v1_1/dkeiewkz6/image/upload", {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (picture === "") {
          axios
            .post("http://localhost:5000/api/homepage/add/data", {
              Name: name,
              currentTitle: currentTitle,
              aboutme: aboutme,
              picture: data.url,
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
              console.log(result);
              setUpload(false);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          axios
            .post("http://localhost:5000/api/homepage/update/data", {
              Name: name,
              currentTitle: currentTitle,
              aboutme: aboutme,
              picture: data.url,
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
              console.log(result);

              setUpload(false);
            })
            .catch((err) => {
              console.log(err);
            });
        }
        console.log(data);
      });
  };
  const updateUserInfoHandle = (e) => {
    e.preventDefault();
    if (state === true) {
      axios
        .post("http://localhost:5000/api/homepage/add/data", {
          Name: name,
          currentTitle: currentTitle,
          aboutme: aboutme,
          picture: picture,
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
            console.log(result);
          } else {
            setbool(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      setState(false);
    } else {
      axios
        .post("http://localhost:5000/api/homepage/update/data", {
          Name: name,
          currentTitle: currentTitle,
          aboutme: aboutme,
          picture: picture,
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
    }
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

            <div className="Picture">
              <img className="Picture-User" src={picture}></img>
              <FiEdit2 onClick={handleShow} style={{ cursor: "pointer" }} />
            </div>

            <Modal show={picshow} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title className="Top-Heading">Upload Image</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="Upload-Image-Section">
                  <input
                    type="file"
                    name="fileToUpload"
                    id="fileToUpload"
                    onChange={(e) => {
                      setImageUpload(e.target.files[0]);
                    }}
                  ></input>
                </div>
                <br />
                <div className="Upload-Image-Section">
                  <BsUpload size={20} onClick={HandlerFunction} />
                  <p className="Temp-Para">Upload Image</p>
                </div>
                {upload ? (
                  <>
                    <div className="Temp">
                      <ProgressBar
                        width="230"
                        trackWidth="13"
                        percentage="90"
                      />
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </Modal.Body>
              <Modal.Footer>
                <button
                  className="HomePage-Go"
                  style={{ width: "120px", marginTop: "20px" }}
                  onClick={handleClose}
                >
                  Close
                </button>
              </Modal.Footer>
            </Modal>
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
              <Form.Control
                as="textarea"
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
                <br />
                <label>Project Image 😍</label>
                <br />
                <br />
                <div className="Upload-Image-Section">
                  <input
                    type="file"
                    name="fileToUpload"
                    id="fileToUpload"
                    onChange={(e) => {
                      setProjectTempImage(e.target.files[0]);
                    }}
                  ></input>
                </div>
                <br />
                <div className="Upload-Image-Section">
                  <BsUpload size={20} onClick={ProjectImageHandler} />
                  <p className="Temp-Para">Upload Image</p>
                </div>
                {upload ? (
                  <>
                    <div className="Temp">
                      <ProgressBar
                        width="230"
                        trackWidth="13"
                        percentage="90"
                      />
                    </div>
                  </>
                ) : (
                  <></>
                )}
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
                      <label>Update Name Of Project 🔫</label>
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
                      <label>Update Link 🎁</label>
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
                      <label>Update Description 🔥</label>
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
                      <label>Update TechStacks Used 🚗</label>
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
                <br />
                <label>Update Project Image 😍</label>
                <br />
                <br />
                <div className="Upload-Image-Section">
                  <input
                    type="file"
                    name="fileToUpload"
                    id="fileToUpload"
                    onChange={(e) => {
                      setProjectTempImage(e.target.files[0]);
                    }}
                  ></input>
                </div>
                <br />
                <div className="Upload-Image-Section">
                  <BsUpload size={20} onClick={ProjectImageHandlerUpdate} />
                  <p className="Temp-Para">Upload Image</p>
                </div>
                {upload ? (
                  <>
                    <div className="Temp">
                      <ProgressBar
                        width="230"
                        trackWidth="13"
                        percentage="90"
                      />
                    </div>
                  </>
                ) : (
                  <></>
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

            <h3
              className="Top-Heading"
              style={{ fontSize: "20px", marginTop: "20px" }}
            >
              Experience
            </h3>
            <br />
            {experiencearr.map((experience, index) => {
              return (
                <div className="Temp">
                  <Card
                    style={{
                      width: "15rem",
                      borderRadius: "30px",
                      border: "2px solid black",
                      margin: "20px",
                    }}
                  >
                    <Card.Img variant="top" src="" />
                    <div className="TypeOfExperience">
                      <label>{experience.type}</label>
                    </div>
                    <Card.Body>
                      <Card.Title>Company : {experience.company}</Card.Title>
                      <Card.Text>Duration : {experience.duration}</Card.Text>
                      <Card.Text>
                        Description : {experience.description}
                      </Card.Text>

                      <Card.Text>
                        TechStacks : {experience.techstacksused}
                      </Card.Text>
                      <Card.Text>
                        Document : <FcDocument />
                        {experience.douments}
                      </Card.Text>
                      <button
                        className="HomePage-Go"
                        style={{ width: "90px", margin: "10px" }}
                        onClick={(e) => {
                          e.preventDefault();
                          localStorage.setItem(
                            "experienceeditid",
                            experience._id
                          );
                          setLoader(true);
                          setexperienceeditShow(true);
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
                            .post(
                              "http://localhost:5000/api/experience/delete",
                              {
                                id: experience._id,
                              }
                            )
                            .then((result) => {
                              if (stateChange === false) {
                                setState(true);
                              } else {
                                setState(false);
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
                  <br />
                </div>
              );
            })}
            <Modal show={experienceshow} onHide={handleexperienceClose}>
              <Modal.Header closeButton>
                <Modal.Title className="Top-Heading">
                  Add Experience
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="form-group mt-3">
                  <label>Type 👑</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Intern,SDE,.."
                    onChange={(e) => {
                      setExperienceType(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Company Name 🔫</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Amazon,Google,..."
                    onChange={(e) => {
                      setCompanyName(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Duration of Experience 🎁</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="3 months,6 months, ..."
                    onChange={(e) => {
                      setDuration(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Add Description 🔥</label>
                  <Form.Control
                    as="textarea"
                    placeholder="Describe Your Experiences,.."
                    rows={3}
                    onChange={(e) => {
                      setexperienceDescription(e.target.value);
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
                      setExperienceTechStacks(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Certificate/Offer Letter Link</label>
                  <Form.Control
                    as="textarea"
                    placeholder="GDrive Link...🔥"
                    rows={3}
                    onChange={(e) => {
                      setCertificateLink(e.target.value);
                    }}
                  />
                </div>
                <br />
              </Modal.Body>
              <Modal.Footer>
                <button
                  className="HomePage-Go"
                  style={{ width: "70px" }}
                  onClick={handleexperienceClose}
                >
                  Close
                </button>
                <button
                  className="HomePage-Go"
                  style={{ width: "70px" }}
                  onClick={handleexperienceClosewithSave}
                >
                  Save Changes
                </button>
              </Modal.Footer>
            </Modal>
            <Modal show={experienceeditshow} onHide={handleexperienceeditClose}>
              <Modal.Header closeButton>
                <Modal.Title className="Top-Heading">
                  Edit Experience
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="form-group mt-3">
                  <label>Edit Type 👑</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Intern,SDE,.."
                    onChange={(e) => {
                      setExperienceeditType(e.target.value);
                    }}
                    value={experienceeditType}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Edit Company Name 🔫</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Amazon,Google,..."
                    onChange={(e) => {
                      setcompanyedit(e.target.value);
                    }}
                    value={companyedit}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Edit Duration of Experience 🎁</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="3 months,6 months, ..."
                    onChange={(e) => {
                      setdurationedit(e.target.value);
                    }}
                    value={durationedit}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Edit Description 🔥</label>
                  <Form.Control
                    as="textarea"
                    placeholder="Describe Your Experiences,.."
                    rows={3}
                    onChange={(e) => {
                      setexperienceDescriptionedit(e.target.value);
                    }}
                    value={experiencedescriptionedit}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Edit TechStacks Used 🚗</label>
                  <Form.Control
                    as="textarea"
                    placeholder="Like ReactJS, MERN, NODE,..."
                    rows={3}
                    onChange={(e) => {
                      setExperienceEditTechstacks(e.target.value);
                    }}
                    value={experienceedittechstacks}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Edit Certificate/Offer Letter Link</label>
                  <Form.Control
                    as="textarea"
                    placeholder="GDrive Link...🔥"
                    rows={3}
                    onChange={(e) => {
                      setcertificatelinkdedit(e.target.value);
                    }}
                    value={Certificatelinkedit}
                  />
                </div>
                <br />
              </Modal.Body>
              <Modal.Footer>
                <button
                  className="HomePage-Go"
                  style={{ width: "70px" }}
                  onClick={handleexperienceeditClose}
                >
                  Close
                </button>
                <button
                  className="HomePage-Go"
                  style={{ width: "70px" }}
                  onClick={handleexperienceeditClosewithSave}
                >
                  Save Changes
                </button>
              </Modal.Footer>
            </Modal>
            <button
              className="HomePage-Go"
              style={{ width: "120px", marginTop: "10px" }}
              onClick={(e) => {
                e.preventDefault();
                handleexperienceShow();
              }}
            >
              Add Experience
            </button>
            <h3
              className="Top-Heading"
              style={{ fontSize: "20px", marginTop: "20px" }}
            >
              Links
            </h3>
            {Linksarr.map((link, index) => {
              return (
                <>
                  <div className="LinksClass">
                    <div className="links-contain">
                      <AiFillDelete
                        size={30}
                        style={{ color: "#D1512D", cursor: "pointer" }}
                        onClick={(e) => {
                          e.preventDefault();
                          axios
                            .post("http://localhost:5000/api/links/delete", {
                              id: link._id,
                            })
                            .then((result) => {
                              if (stateChange === false) {
                                setStateChange(true);
                              } else {
                                setStateChange(false);
                              }
                            })
                            .catch((err) => {
                              console.log(err);
                            });
                        }}
                      />
                    </div>
                    Name : {link.Name}
                    <br />
                    Link : {link.link}
                    <br />
                  </div>
                </>
              );
            })}
            <Modal show={linkshow} onHide={handlelinkClose}>
              <Modal.Header closeButton>
                <Modal.Title className="Top-Heading">Add Links</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="form-group mt-3">
                  <label> Link Name 👑</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Codechef,Codeforces.."
                    onChange={(e) => {
                      setLinksName(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Link 🔫</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="www.codechef.com/tourist.."
                    onChange={(e) => {
                      setlink(e.target.value);
                    }}
                  />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button
                  className="HomePage-Go"
                  style={{ width: "70px" }}
                  onClick={handlelinkClose}
                >
                  Close
                </button>
                <button
                  className="HomePage-Go"
                  style={{ width: "70px" }}
                  onClick={handlelinkClosewithsave}
                >
                  Save Changes
                </button>
              </Modal.Footer>
            </Modal>
            <button
              className="HomePage-Go"
              style={{ width: "120px", marginTop: "20px" }}
              onClick={(e) => {
                e.preventDefault();
                setlinkShow(true);
              }}
            >
              Add Link
            </button>
            <div className="Temp">
              <button
                type="submit"
                className="HomePage-Go"
                style={{ width: "300px", marginTop: "20px" }}
              >
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
