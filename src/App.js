import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import CardsCompo from "./components/CardsCompo";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import NotFound from "./NotFound";
function App() {
  const [findid, setFindid] = useState("");
  const [changestate, setchangestate] = useState(true);
  setTimeout(() => {
    if (changestate === true) {
      setchangestate(false);
    } else {
      setchangestate(true);
    }
  }, 300);
  useEffect(() => {
    setFindid(localStorage.getItem("userid"));
  }, [changestate]);
  return (
    <>
      <Routes>
        {findid.length > 0 ? (
          <>
            {" "}
            <Route path="/" element={<Homepage />} />
            <Route path="/dashboard/:findid" element={<Dashboard />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </>
        )}

        <Route path="*" exact={true} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
