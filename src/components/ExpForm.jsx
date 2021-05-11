import { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpEdu from "./ExpEdu";

class ExpForm extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.closeFunc}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeFunc}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.closeFunc}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ExpForm;
