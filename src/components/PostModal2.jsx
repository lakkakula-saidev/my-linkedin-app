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
import PhotoSizeSelectActualOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActualOutlined";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";
import AssignmentRoundedIcon from "@material-ui/icons/AssignmentRounded";
import "bootstrap/dist/css/bootstrap.min.css";
import LanguageRoundedIcon from "@material-ui/icons/LanguageRounded";
import RefreshRoundedIcon from "@material-ui/icons/RefreshRounded";
import DescriptionIcon from "@material-ui/icons/Description";
import AddIcon from "@material-ui/icons/Add";
import MessageIcon from "@material-ui/icons/Message";

class PostModal2 extends Component {
  state = {
    post: {
      text: "ciao",
    },
    isLoading: false,
    postCss1: "postbtn1 ",
    postCss2: "postbtn2 ",
    plusIcon: true,
    putCursor: () =>
      document.getElementById("exampleFormControlTextarea1").focus(),
  };

  submitPost = async () => {
    try {
      this.setState({ isLoading: true });
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${this.props.id}`,
        {
          method: "PUT",
          body: JSON.stringify(this.state.post),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMWY1MWIxZjBmYjAwMTVkOTE3OTEiLCJpYXQiOjE2MjM2NTczNzksImV4cCI6MTYyNDg2Njk3OX0.Ca6eiVDE1TdO2u0OAs5NIlSfceE78PpbiBrStWjFMGE",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        alert("Your Post has been saved!!");
        this.setState({ post: { text: "" } });
        this.setState({ isLoading: false });
        this.props.hide();
      } else {
        alert("Something happened :/", response.status);
        this.setState({ isLoading: false });
      }
    } catch (error) {
      alert(error);
    }
  };

  componentDidMount = () => {
    this.fetchPost();
  };

  componentDidUpdate = (prevProps) => {
    prevProps.id !== this.props.id && this.fetchPost();
  };

  fetchPost = async () => {
    console.log("you should see this console.log just once every reload");

    // let's fetch our data!
    try {
      this.setState({
        isLoading: true,
      });

      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${this.props.id}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZTllNDYxOWU1ZDAwMTUxZjhmNzkiLCJpYXQiOjE2MjA2MzQwODUsImV4cCI6MTYyMTg0MzY4NX0.LVFiiWvC5hj_tkyYlnYiUZd9DafCRH7foRwmjGXSjPM",
          },
        }
      );

      if (response.ok) {
        let data = await response.json();

        console.log(data);
        this.setState({ post: { text: data.text } });

        // this.setState({ post: {text: reservations}});
      } else {
        console.log("houston we got an error");
        this.setState({ isError: true, isLoading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isError: true, isLoading: false });
    }
  };

  render() {
    return (
      <>
        <Modal
          show={this.props.show}
          id={this.props.id}
          onHide={this.props.hide}
          scrollable={true}
          style={{ height: "100vh" }}
        >
          <Modal.Header>
            <Modal.Title>Edit a Post</Modal.Title>
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
              className="form-control mt-3"
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
              text={"ciao"}
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
          {this.state.isLoading && (
            <Spinner animation="border" variant="primary" />
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              alignItems: "center",
            }}
          >
            <div
              onClick={
                this.state.plusIcon
                  ? () => this.setState({ plusIcon: false })
                  : () => this.setState({ plusIcon: true })
              }
            >
              <AddIcon
                style={{
                  color: "rgb(10,102,194)",
                  fonstSize: "5rem",
                  marginLeft: "1.5rem",
                  cursor: "pointer",
                }}
              />
            </div>
            <PhotoSizeSelectActualOutlinedIcon
              style={{ color: "rgb(102,102,102)", marginLeft: "1rem" }}
            />
            <PlayArrowOutlinedIcon
              style={{
                color: "white",
                backgroundColor: "rgb(102,102,102)",
                borderRadius: "5px",
                fontSize: "1.2rem",
                marginLeft: "1rem",
              }}
            />
            <DescriptionIcon
              style={{ color: "rgb(102,102,102)", marginLeft: "1rem" }}
            />
            <div
              className="br  "
              style={{ height: "1.5rem", marginLeft: "1rem" }}
            >
              {" "}
            </div>
            <MessageIcon
              style={{
                color: "rgb(102,102,102)",
                marginLeft: "1.5rem",
                marginRight: "0.5rem",
              }}
            />
            <span className="d-none d-sm-inline-block">Anyone</span>
            <button
              className={
                this.state.post.text ? this.state.postCss1 : this.state.postCss2
              }
              style={{ marginLeft: "auto" }}
              onClick={this.submitPost}
              disabled={this.state.post.text ? false : true}
            >
              Edit
            </button>
          </div>
          {this.state.plusIcon && (
            <Modal.Footer style={{ backgroundColor: "rgb(243,242,239)" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                ></div>
              </div>
            </Modal.Footer>
          )}

          {console.log(this.state.post.text)}
        </Modal>
      </>
    );
  }
}

export default PostModal2;
