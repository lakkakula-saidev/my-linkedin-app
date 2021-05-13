import React, { Component } from "react";
import { Jumbotron, Container, Col, Image, Row } from "react-bootstrap";
import { DropdownButton, Dropdown, Spinner, Button } from "react-bootstrap";
import { Route } from "react-router-dom";
import About from "./About";
import Featured from "./Featured";
import Dashboard from "./Dashboard";
import ExpEdu from "./ExpEdu";
import Activity from "./Activity";
import { withRouter, Link } from "react-router-dom";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

export default class MainBody1 extends Component {
  state = {
    profileData: {},
    isloading: false,
  };

  async componentDidMount() {
    const endpoint = "https://striveschool-api.herokuapp.com/api/profile/me";

    try {
      let response = await fetch(endpoint, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZTllNDYxOWU1ZDAwMTUxZjhmNzkiLCJpYXQiOjE2MjA2MzQwODUsImV4cCI6MTYyMTg0MzY4NX0.LVFiiWvC5hj_tkyYlnYiUZd9DafCRH7foRwmjGXSjPM",
        },
      });
      if (response.ok) {
        response = await response.json();
        this.setState({
          profileData: response,
        });
        this.setState({ isLoading: !this.state.isloading });
      }
    } catch (error) {
    } finally {
      console.log(this.state.profileData /* this.state.profileData._id */);
    }
  }

  render() {
    return (
      <div className="px-0 mainBody1">
        {!this.state.isLoading && (
          <Spinner className="loader" animation="border" variant="primary" />
        )}
        {this.state.isLoading && (
          <>
            <Jumbotron className="jumbo">
              <Image
                src="https://source.unsplash.com/random"
                className="jumboImage"
              />

              <Row className="jumboRow">
                <div className="d-flex justify-content-between profileIconRow">
                  <div className="profileIcon">
                    <Button variant="outline-primary profileButton">
                      <img
                        src="https://source.unsplash.com/random"
                        class="roundedImg "
                      />
                    </Button>
                  </div>
                  <div className="align-self-center">
                    <EditOutlinedIcon />
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <h2>
                    {this.state.profileData.name}
                    {this.state.profileData.surname}
                  </h2>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <LanguageOutlinedIcon />
                    </div>
                    <h6 className="currentRole">
                      {this.state.profileData.title}
                    </h6>
                  </div>
                </div>

                <Col className="jumboRow-col1">
                  <p id="description">
                    {this.state.profileData.bio}. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Iure molestiae repellat
                    aspernatur, facilis excepturi, provident corporis sunt quas
                    voluptate itaque optio unde neque odio distinctio eum a
                    obcaecati, ab voluptas?
                  </p>
                  <Row className="infoRow">
                    <ul>
                      <li>
                        Strive School, {this.state.profileData.area} &middot;
                      </li>

                      <li>
                        <a href="">Number of connections &middot;</a>
                      </li>

                      <li>
                        <a href="">Contact info</a>
                      </li>
                    </ul>
                  </Row>
                  <Row className="infoRow">
                    <ul>
                      <li>
                        <div>
                          <DropdownButton
                            id="dropdown-basic-button"
                            title="Open to"
                          >
                            <Dropdown.Item href="#/action-1">
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Something else
                            </Dropdown.Item>
                          </DropdownButton>
                        </div>
                      </li>
                      <li>
                        <div>
                          <DropdownButton
                            id="dropdown-basic-button"
                            title="Add profile section"
                          >
                            <Dropdown.Item href="#/action-1">
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Something else
                            </Dropdown.Item>
                          </DropdownButton>
                        </div>
                      </li>
                      <li>
                        <div>
                          <DropdownButton
                            id="dropdown-basic-button"
                            title="More.."
                          >
                            <Dropdown.Item href="#/action-1">
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Something else
                            </Dropdown.Item>
                          </DropdownButton>
                        </div>
                      </li>
                    </ul>{" "}
                  </Row>
                </Col>

                <Col className="jumboRow-col2 "></Col>
              </Row>
            </Jumbotron>
            <About />
            <Featured />
            <Activity />
            <Dashboard />
            <ExpEdu user_id={this.state.profileData._id} />
          </>
        )}
      </div>
    );
  }
}
