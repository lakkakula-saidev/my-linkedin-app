import React, { Component } from "react";
import { Jumbotron, Container, Col, Image, Row } from "react-bootstrap";
import { DropdownButton, Dropdown, Spinner } from "react-bootstrap";
import { Route } from "react-router-dom";
import About from "../About";
import Featured from "./Featured";
import Dashboard from "./Dashboard";
import ExpEdu from "./ExpEdu";
import Activity from "./Activity";
import ExperienceContent from "./ExperienceContent"
import EducationContent from "./EducationContent"
import ExpEduCard from "./ExpEduCard"
import Interests from "./interests";


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
        console.log(response.json());
        this.setState({
          profileData: await response.json(),
        });
        this.setState({ isLoading: !this.state.isloading });
      }
    } catch (error) {}
  }

  render() {
    return (
      <div className="px-0 mainBody1">
        {this.state.isLoading && (
          <Spinner className="loader" animation="border" variant="primary" />
        )}
        {!this.state.isLoading && (
          <Jumbotron className="jumbo">
            <Image
              src="https://source.unsplash.com/random"
              className="jumboImage"
            />
            <Row className="jumboRow">
              <Col className="jumboRow-col1">
                <h2>
                  {/* {this.state.profileData.name}
                  {this.state.profileData.surname} */}
                  Saidev Lakkakula
                </h2>
                <p id="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  molestiae repellat aspernatur, facilis excepturi, provident
                  corporis sunt quas voluptate itaque optio unde neque odio
                  distinctio eum a obcaecati, ab voluptas?
                </p>
                <Row className="infoRow">
                  <Col>Strive School, Germany</Col>
                  <Col>
                    <ul>
                      <li>
                        <div>Number of connections</div>
                      </li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                      <li>Contact info</li>
                    </ul>
                  </Col>
                </Row>
                <Row className="infoRow">
                  <Col>
                    <DropdownButton id="dropdown-basic-button" title="Open to">
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </DropdownButton>
                  </Col>
                  <Col>
                    <DropdownButton
                      id="dropdown-basic-button"
                      title="Add profile section"
                    >
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </DropdownButton>
                  </Col>
                  <Col>
                    <DropdownButton id="dropdown-basic-button" title="More..">
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </DropdownButton>
                  </Col>
                </Row>
              </Col>

              <Col className="jumboRow-col2">
                <h2>Current position</h2>
              </Col>
            </Row>
          </Jumbotron>
        )}
        <About />
        <Featured />
</div>
    )}
}
