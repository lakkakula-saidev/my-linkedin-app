import React, { Component } from "react";
import { Jumbotron, Col, Image, Row } from "react-bootstrap";
import { DropdownButton, Dropdown, Spinner, Button } from "react-bootstrap";
import About from "./About";
import Featured from "./Featured";
import Dashboard from "./Dashboard";
import ExpEdu from "./ExpEdu";
import Activity from "./Activity";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Capitalize from "./Capitalize";

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
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMWY1MWIxZjBmYjAwMTVkOTE3OTEiLCJpYXQiOjE2MjM2NTczNzksImV4cCI6MTYyNDg2Njk3OX0.Ca6eiVDE1TdO2u0OAs5NIlSfceE78PpbiBrStWjFMGE",
        },
      });
      if (response.ok) {
        let data = await response.json();
        console.log(data + "this is the log");
        this.setState({
          profileData: data,
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
                  <div className="col-sm-8">
                    <h2>
                      {/* {Capitalize(this.state.profileData.name)}{" "}
                      {Capitalize(this.state.profileData.surname)} */}
                      Kostas Makaronas
                    </h2>
                  </div>
                  <div className="col-sm-4 d-flex justify-content-center align-items-center">
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
                            id="profileButtons"
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
                          <DropdownButton id="profileButtons" title="More..">
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
