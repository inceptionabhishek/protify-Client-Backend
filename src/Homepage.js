import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import CardsCompo from "./components/CardsCompo";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <div>
      <div className="App">
        <div className="TopSection">
          <div className="TopTop">
            <img src="https://i.gifer.com/6oa.gif" alt=""></img>
            <h1 className="Top-Heading">Welcome To Protify</h1>
          </div>

          <p className="Top-Heading-SubHeading">
            Now, Making portfolio is just One Click Away!
            <br /> Bruh, Just Follow Some step, ... Bingo!You have your
            portfolio ready.
          </p>
          <div className="Auth-Button">
            <Link to="/login">
              <button className="Top-Heading-Button-Login">Login</button>
            </Link>
            <Link to="/signup">
              <button className="Top-Heading-Button-Login">Signup</button>
            </Link>
          </div>
        </div>
        <div className="Divider" />
        <div className="ExploreSection">
          <h1 className="TopHeading-ExploreSection">Explore portfolios</h1>
          <img
            className="projects-gif-top"
            src="https://i.gifer.com/bf6.gif"
            alt=""
          ></img>
        </div>
        <div className="Temp-Centered">
          <Container>
            <Row>
              <Col sm>
                <CardsCompo />
              </Col>
              <Col sm>
                <CardsCompo />
              </Col>
              <Col sm>
                <CardsCompo />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
