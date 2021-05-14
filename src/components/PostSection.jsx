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

class PostSection extends Component {
  state = {
    reservations: [], // initial state as an empty array, so can immediately map it out in the render
    isLoading: false,
    isError: false,
  };

  componentDidMount = async () => {
    console.log("you should see this console.log just once every reload");

    // let's fetch our data!
    try {
      this.setState({
        isLoading: true,
      });

      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk5MDI1YTYxOWU1ZDAwMTUxZjhmODQiLCJpYXQiOjE2MjA2NDAzNDcsImV4cCI6MTYyMTg0OTk0N30.TKN-9r8r9lxsl0FC7H-Iga71LYTagaSza3FmFynfKwE",
          },
        }
      );
      console.log(response);
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
  };

  componentDidUpdate = async () => {};

  render() {
    let cts = {};
    let cdate = new Date(cts).toString();
    return (
      <>
        <div>
          {this.state.reservations
            .slice(
              this.state.reservations.length - 10,
              this.state.reservations.length
            )
            .reverse()
            .map((post) => (
              <Card className="padder" key={post.id}>
                <Card.Body>
                  <Card.Text>
                    <div className="sizer">
                      {" "}
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
                          {post.createdAt} • <BiWorld />{" "}
                        </p>
                      </div>
                     
                      <div className="foo">
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                          <h1><BiDotsHorizontalRounded /></h1>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            <p className="boldness fonty">Save</p> 
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                          <p className="boldness fonty">Copy link to post</p>
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                          <p className="boldness fonty">Embed this post</p>   
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                          <p className="boldness fonty">Unfollow {post.user.name}{" "}{post.user.surname}</p>   
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                          <p className="boldness fonty"> I don't want to see this post {post.user.name}{" "}{post.user.surname}</p>    
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                          <p className="boldness fonty"> Report this post</p>
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                          <p className="boldness fonty"> Who can see this post</p> 
                         </Dropdown.Item>
                         {post.user._id === "6098e9e4619e5d00151f8f79" && <Dropdown.Item href="#/action-3">
                          <p className="boldness fonty" style={{color:'red'}}> Edit</p> 
                          </Dropdown.Item>}
                          {post.user._id === "6098e9e4619e5d00151f8f79" && <Dropdown.Item href="#/action-3">
                          <p className="boldness fonty" style={{color:'red'}}> Delete</p> 
                          </Dropdown.Item>}
                          
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    </div>

                    <p className="postP mar2"> {post.text}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
        </div>
       
      </>
    );
  }
}

export default PostSection;
