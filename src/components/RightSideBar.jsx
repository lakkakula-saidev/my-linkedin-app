import { Component } from "react";
import { Col, Card, Button, Figure } from "react-bootstrap";
import pic from "../leoAssets/ciao.jpg";
import "../styleLeo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HelpIcon from "@material-ui/icons/Help";
import LanguageIcon from "@material-ui/icons/Language";

import React from "react";

class RightSideBar extends Component {
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
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk5MDI1YTYxOWU1ZDAwMTUxZjhmODQiLCJpYXQiOjE2MjA2NDAzNDcsImV4cCI6MTYyMTg0OTk0N30.TKN-9r8r9lxsl0FC7H-Iga71LYTagaSza3FmFynfKwE",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
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
    let array = this.state.reservations.splice();
    // render is not suitable for putting a fetch
    // render is fired multiple times during the lifecycle of a component
    // render will be invoked again every time there's a change in the STATE or in the PROPS

    // I cannot put the fetch here
    // and I cannot set the state here either
    // this.setState({ reservations: ['stefano'] })
    return (
      <>
        <div>
          <div className=" margy">
            <Col>
              <div className="margy">
                {" "}
                <Button size="sm" className="borderR" variant="primary">
                  Connect
                </Button>
                <Button size="sm" className="borderR" variant="primary">
                  Connect
                </Button>
                <LanguageIcon />
              </div>
              <p className="boldness">
                Modifica il profilo pubblico e l’URL{" "}
                <HelpIcon fontSize="small" />
              </p>
            </Col>
          </div>

          <Col style={{ backgroundColor: "white" }} className="mb-4">
            <Card className=" imageProfile" style={{ width: "100% " }}>
              <Card.Img variant="top" src={pic} />
            </Card>
          </Col>
          <Col className=" upperP backG pl-1">
            <h6 className="sideBarHeading">Other people</h6>

            {this.state.reservations.slice(0, 8).map((user) => (
              <div
                className="d-flex sizer justify-content-start"
                key={user._id}
              >
                <Figure.Image
                  className="changeProfile"
                  alt="171x180"
                  src={user.image}
                  onClick={() => this.props.changeProfile(user)}
                />

                <div className="justify-content-start">
                  {" "}
                  <Figure.Caption className="right borderR ">
                    <p
                      className="boldness changeProfile"
                      onClick={() => this.props.changeProfile(user)}
                    >
                      {user.name} {user.username}
                    </p>
                    <p
                      className="titlePara changeProfile"
                      onClick={() => this.props.changeProfile(user)}
                    >
                      {user.title}
                    </p>
                    <Button className="borderR" variant="outline-secondary">
                      Connect
                    </Button>{" "}
                  </Figure.Caption>
                </div>
              </div>
            ))}
          </Col>
          <Col className="backG">
            <h6 className="sideBarHeading">People you may know</h6>
            {this.state.reservations.slice(0, 7).map((user) => (
              <div className=" sizer" key={user._id}>
                <Figure.Image
                  width={17}
                  height={18}
                  alt="171x180"
                  src={user.image}
                />

                <div className="justify-content-start  ">
                  {" "}
                  <Figure.Caption className="right borderR ">
                    <p className="boldness">
                      {user.name} {user.username} 3°+
                    </p>
                    <p className="titlePara">{user.title}</p>
                    <Button className="borderR" variant="outline-secondary">
                      Connect
                    </Button>{" "}
                  </Figure.Caption>
                </div>
              </div>
            ))}
          </Col>
        </div>
      </>
    );
  }
}

export default RightSideBar;
