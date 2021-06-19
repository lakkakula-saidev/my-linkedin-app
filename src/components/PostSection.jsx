import { Component } from "react";
import {
  Col,
  Row,
  Container,
  Card,
  Button,
  Table,
  Figure,
  Dropdown,
} from "react-bootstrap";
import pic from "../leoAssets/ciao.jpg";
import "../styleLeo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HelpIcon from "@material-ui/icons/Help";
import LanguageIcon from "@material-ui/icons/Language";
import { BiWorld, BiDotsHorizontalRounded } from "react-icons/bi";
import React from "react";
import { format, parseISO } from "date-fns";
import PostModal2 from "./PostModal2";
import { post } from "jquery";

class PostSection extends Component {
  state = {
    reservations: [], // initial state as an empty array, so can immediately map it out in the render
    isLoading: false,
    isError: false,
    toUpdate: true,
  };

  async updatePOST() {
    try {
      this.setState({
        isLoading: true,
      });

      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMWY1MWIxZjBmYjAwMTVkOTE3OTEiLCJpYXQiOjE2MjM2NTczNzksImV4cCI6MTYyNDg2Njk3OX0.Ca6eiVDE1TdO2u0OAs5NIlSfceE78PpbiBrStWjFMGE",
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({ reservations: data, isError: false, isLoading: false });
      } else {
        console.log("houston we got an error");
        this.setState({ isError: true, isLoading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isError: true, isLoading: false });
    }
  }
  componentDidMount = async () => {
    await this.updatePOST();
    // let's fetch our data!
  };

  componentDidUpdate = async () => {
    if (!this.state.toUpdate) {
      this.updatePOST();
      this.setState({ toUpdate: true });
    }
  };

  render() {
    let cts = {};
    let cdate = new Date(cts).toString();
    return (
      <>
        <div>
          {console.log(this.state.reservations + "line 78")}
          {this.state.reservations
            .slice(
              this.state.reservations.length - 10,
              this.state.reservations.length
            )
            .reverse()
            .map((post) => (
              <Card className="padder" key={post._id}>
                <Card.Body>
                  <Card.Text>
                    <div className="sizer">
                      <div>
                        <img
                          src={post.user.image}
                          alt=""
                          className="figure-img"
                        />
                      </div>
                      <div className="mar">
                        <span> </span>
                        <h6 className="boldness">{post.user.name}</h6>
                        <span> </span>
                        <h6 className="boldness">{post.user.surname}</h6>
                        <span> </span>
                        <h6 className="grey">• Following</h6>
                        <div className="grey">{post.user.title}</div>
                        <p className="grey">
                          {post.createdAt.split("T")[0]} • <BiWorld />{" "}
                        </p>
                      </div>

                
                    <p className="postP mar2"> {post.text}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
        </div>

        <PostModal2
          show={Boolean(this.state.clicked)}
          hide={() => this.setState({ clicked: null, toUpdate: false })}
          img={this.state.imgUrl}
          name={this.state.name}
          surname={this.state.surname}
          id={this.state.clicked}
        />
      </>
    );
  }
}

export default PostSection;
