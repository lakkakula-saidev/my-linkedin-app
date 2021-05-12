// import logo from "./logo.svg";
import "./App.css";
import RightSideBar from "./components/RightSideBar";
import MyNav from "./components/MyNav";

import Dashboard from "./components/Dashboard";
import Activity from "./components/Activity";
import ExpEdu from "./components/ExpEdu";
import ProfilePage from "./components/ProfilePage";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/mainBody1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PostSection from "./components/PostSection";

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
        <PostSection/>
      </Container>
      
    </div>
  );
}

export default App;
