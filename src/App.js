import logo from "./logo.svg";
import "./App.css";
import ProfilePage from "./components/ProfilePage";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/mainBody1.css";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Container className="mainContainer">
        <Row className="row">
          <ProfilePage />
        </Row>
      </Container>
    </div>
  );
}

export default App;
