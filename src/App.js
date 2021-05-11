// import logo from "./logo.svg";
import "./App.css";
import RightSideBar from "./components/RightSideBar";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Activity from "./components/Activity";
import ExpEdu from "./components/ExpEdu";
import ProfilePage from "./components/ProfilePage";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/mainBody1.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <MyNav />
      <Container className="mainContainer">
        <Row className="row">
          <Col md={8} lg={8}>
            <ProfilePage />
          </Col>
          <Col md={4} lg={4}>
            <RightSideBar />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
