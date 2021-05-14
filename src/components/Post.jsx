import { Component } from "react";
import "../Post.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PhotoSizeSelectActualOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActualOutlined";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";
import EventNoteRoundedIcon from "@material-ui/icons/EventNoteRounded";
import AssignmentRoundedIcon from "@material-ui/icons/AssignmentRounded";
import PostModal from "./PostModal";

class Post extends Component {
  state = {
    clicked: false,
    imgUrl: "",
    name: "",
    surname: "",
  };
  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
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
        this.setState({ imgUrl: data.image });
        this.setState({ name: data.name });
        this.setState({ surname: data.surname });
      }
    } catch (error) {
      alert(error);
    }
  };
  render() {
    return (
      <>
        <div className="postParent mb-5">
          <div
            style={{
              flexWrap: "nowrap",
              alignItems: "center",
              display: "flex",
              justifyContent: "space-around",
            }}
            className="mt-2 mb-2"
          >
            <img className="postImg" src={this.state.imgUrl} />
            <button
              className="postBtn d-none d-md-block"
              onClick={() => this.setState({ clicked: true })}
            >
              Start a post
            </button>
            <button
              className="postBtn1 d-block d-md-none"
              onClick={() => this.setState({ clicked: true })}
            >
              Start a post
            </button>
          </div>
          <div
            style={{
              flexWrap: "nowrap",
              alignItems: "center",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <span className="link">
              {
                <PhotoSizeSelectActualOutlinedIcon
                  style={{ color: "rgb(112,181,249)" }}
                />
              }{" "}
              Photo{" "}
            </span>
            <span className="link">
              {" "}
              {
                <PlayArrowOutlinedIcon
                  style={{
                    color: "white",
                    backgroundColor: "rgb(127,193,94)",
                    borderRadius: "5px",
                  }}
                />
              }{" "}
              Video
            </span>
            <span className="link">
              {" "}
              {
                <EventNoteRoundedIcon style={{ color: "rgb(231,163,62)" }} />
              }{" "}
              Event{" "}
            </span>
            <span className="link">
              {" "}
              {
                <AssignmentRoundedIcon style={{ color: "rgb(245,152,126)" }} />
              }{" "}
              <span className="d-none d-lg-inline-block mr-1">Write </span>{" "}
              article
            </span>
          </div>
        </div>
        <PostModal
          show={this.state.clicked}
          hide={() => this.setState({ clicked: false })}
          img={this.state.imgUrl}
          name={this.state.name}
          surname={this.state.surname}
        />
      </>
    );
  }
}

export default Post;
