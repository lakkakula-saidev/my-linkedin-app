import "../Post.css";
import { Component } from "react";
import {
  Modal,
  Button,
  Dropdown,
  DropdownButton,
  Spinner,
} from "react-bootstrap";
import CloseIcon from "@material-ui/icons/Close";
import "bootstrap/dist/css/bootstrap.min.css";
import LanguageRoundedIcon from "@material-ui/icons/LanguageRounded";
import RefreshRoundedIcon from "@material-ui/icons/RefreshRounded";

class PostModal extends Component {
  state = {
    post: {
      text: "",
    },
    isLoading: false,
  };

  submitPost = async () => {
    try {
      this.setState({ isLoading: true });
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          body: JSON.stringify(this.state.post),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZTllNDYxOWU1ZDAwMTUxZjhmNzkiLCJpYXQiOjE2MjA2MzQwODUsImV4cCI6MTYyMTg0MzY4NX0.LVFiiWvC5hj_tkyYlnYiUZd9DafCRH7foRwmjGXSjPM",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        alert("Your Post has been saved!!");
        this.setState({ post: { text: "" } });
        this.setState({ isLoading: false });
      } else {
        alert("Something happened :/");
        this.setState({ isLoading: false });
      }
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <>
        <Modal
          show={this.props.show}
          onHide={this.props.hide}
          scrollable={true}
          style={{ height: "100vh" }}
        >
          <Modal.Header>
            <Modal.Title>Create a Post</Modal.Title>
            <div
              className="ml-auto m-0 p-0"
              onClick={this.props.hide}
              style={{ cursor: "pointer" }}
            >
              <CloseIcon />
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex">
              <img className="postImg" src={this.props.img} />
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  position: "relative",
                  top: "0px",
                  left: "2rem",
                }}
              >
                {this.props.name} {this.props.surname}
                <DropdownButton
                  id="dropdown-basic-button"
                  title={<span> {<LanguageRoundedIcon />} Anyone</span>}
                  style={{
                    backgroundColor: "white!important",
                  }}
                >
                  <Dropdown.Item href="#/action-1">{} Anyone</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </DropdownButton>
              </span>
            </div>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={4}
              onChange={(e) =>
                this.setState({
                  post: { ...this.state.post, text: e.target.value },
                })
              }
              value={this.state.post.text}
              style={{ border: "none" }}
              placeholder="What do you want  to talk about?"
            />
            <button
              className="hashBtn"
              style={{ border: "none", backgroundColor: "white" }}
            >
              <span
                style={{
                  cursor: "pointer",
                  color: "rgb(35,118,200)",
                  fontWeight: "500",
                  fontSize: "1rem",
                }}
                onClick={() =>
                  this.setState({
                    post: {
                      ...this.state.post,
                      text: this.state.post.text + "#",
                    },
                  })
                }
              >
                Add hashtag{" "}
              </span>
            </button>
            <span>
              <RefreshRoundedIcon
                className="refresh"
                onClick={() =>
                  this.setState({
                    post: { ...this.state.post, text: "" },
                  })
                }
              />
            </span>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={this.props.hide}>
              Close
            </Button> */}
            {this.state.isLoading && (
              <Spinner animation="border" variant="primary" />
            )}

            <Button variant="primary" onClick={this.submitPost}>
              Post
            </Button>
          </Modal.Footer>
          {console.log(this.state.post.text)}
        </Modal>
      </>
    );
  }
}

export default PostModal;
