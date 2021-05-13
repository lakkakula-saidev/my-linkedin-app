import { Component } from "react";
import {
  Col,
  Row,
  Container,
  Card,
  Button,
  Table,
  Figure,
} from "react-bootstrap";
import pic from "../leoAssets/ciao.jpg";
import "../styleLeo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HelpIcon from "@material-ui/icons/Help";
import LanguageIcon from "@material-ui/icons/Language";
import {BiWorld, BiDotsHorizontalRounded} from "react-icons/bi"
import React from "react";

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

  render() {
    let cts = {}
    let cdate = (new Date(cts)).toString();
    return (
      <>
        <Container>
          {this.state.reservations.slice(0, 8).map((post) => (
            <Card className="padder"key={post.id}>
              <Card.Body>
                <Card.Text>
               
                  <div className="sizer">
                    {" "}
                   <div>
                       <img src={post.user.image} alt="" className="figure-img" />
                   </div>
                    <div className="mar"><span> </span>
                    <h6 className="boldness">{post.user.name}</h6>
                    <span> </span>
                    <h6 className="boldness">{post.user.surname}</h6>
                    <span> </span>
                    <h6 className="grey">• Following</h6> 
                    <div className="grey">{post.user.title}</div>
                    <p className="grey">{post.createdAt} • <BiWorld/> </p> 
                    </div>
                    <div className="foo"><h2><BiDotsHorizontalRounded/></h2></div>
                   
                  </div>
                 
                  <p className="postP mar2"> {post.text}</p>
                </Card.Text>
              </Card.Body>

            </Card>
          ))}
        </Container>
      </>
    );
  }
}

export default PostSection;
