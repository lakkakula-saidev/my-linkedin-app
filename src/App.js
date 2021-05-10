// import logo from "./logo.svg";
import "./App.css";
import MyNav from "./components/MyNav";

import Dashboard from "./components/Dashboard"
import Activity from "./components/Activity"
import ExpEdu from "./components/ExpEdu"
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
          <ProfilePage />
        </Row>
      </Container>
    </div>
  );
}

export default App;
