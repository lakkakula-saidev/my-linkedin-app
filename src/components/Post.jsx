import { Component } from "react";
import "../Post.css";
import PhotoSizeSelectActualOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActualOutlined";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";
import EventNoteRoundedIcon from "@material-ui/icons/EventNoteRounded";
import AssignmentRoundedIcon from "@material-ui/icons/AssignmentRounded";
import PostModal from "./PostModal";

class Post extends Component {
  state = {
    clicked: false,
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
            <img className="postImg" src={"https://picsum.photos/200/300"} />
            <button
              className="postBtn"
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
              Write article{" "}
            </span>
          </div>
        </div>
        <PostModal
          show={this.state.clicked}
          hide={() => this.setState({ clicked: false })}
        />
      </>
    );
  }
}

export default Post;
