import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../MyNav.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import SearchIcon from "@material-ui/icons/Search";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SmsRoundedIcon from "@material-ui/icons/SmsRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import { Link, withRouter } from "react-router-dom";

import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  InputGroup,
  Container,
} from "react-bootstrap";

class MyNav extends Component {
  render() {
    return (
      <Navbar
        style={{
          position: "fixed",
          top: 0,
          height: "fit-content",
          zIndex: 100,
          backgroundColor: "white",
        }}
        className=" w-100 p-0 navbar-expand-lg"
        expand="lg"
      >
        <Container>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Link to="/feed">
              <div>
                <LinkedInIcon
                  style={{ color: "rgb(10,102,194)", fontSize: 50 }}
                />
              </div>
            </Link>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text
                  id="basic-addon3"
                  className="input-group-text"
                  id="basic-addon3"
                  style={{ position: "absolute", maxWidth: "fit-content" }}
                >
                  {
                    <SearchIcon
                      style={{ backgroundColor: "rgb(238,243,248)" }}
                    />
                  }
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id="basic-url"
                className="search  "
                placeholder="Search"
                // style={{
                //   transition: "1s",
                // }}
                //   maxWidth: "10rem",
                //   left: "3rem",
                //   position: "relative",
                //   backgroundColor: "rgb(238, 243, 248)",
                // }}
                type="text"
                aria-describedby="basic-addon3"
              />
            </InputGroup>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="align-items: center mx-auto ml-lg-5"
              // style={{ marginLeft: "10rem" }}
            >
              <Nav.Link
                className="mx-xl-2 my-auto"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                href="#home"
              >
                {<HomeRoundedIcon style={{ fontSize: 33 }} />}
                <p className="m-0 p-0 ">Home</p>
              </Nav.Link>
              <Nav.Link
                className="mx-2 my-auto"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                href="#MyNet"
              >
                {<PeopleAltRoundedIcon style={{ fontSize: 33 }} />}
                <p className="m-0">My Network</p>
              </Nav.Link>
              <Nav.Link
                className="mx-2 my-auto"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                href="#Jobs"
              >
                {<WorkRoundedIcon style={{ fontSize: 33 }} />}
                <p className="m-0 text-center">Jobs</p>
              </Nav.Link>
              <Nav.Link
                className="mx-2 my-auto"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                href="#Messaging"
              >
                {<SmsRoundedIcon style={{ fontSize: 33 }} />}
                <p className="m-0 text-center">Messaging</p>
              </Nav.Link>
              <Nav.Link
                className="mx-2 my-auto"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                href="#Noti"
              >
                {<NotificationsRoundedIcon style={{ fontSize: 33 }} />}
                <p className="m-0 ">Notifications</p>
              </Nav.Link>

              <NavDropdown
                className="my-auto"
                title={
                  <>
                    <Link to="/">
                      <div>
                        <PersonRoundedIcon style={{ fontSize: 28 }} />
                      </div>
                    </Link>
                    <span style={{ fontSize: "0.7rem" }}>Me</span>
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <div
                className="br d-none d-lg-block "
                style={{ height: "4.7rem" }}
              >
                {" "}
              </div>
              <NavDropdown
                className="my-auto mx-auto mx-md-2"
                title={
                  <>
                    <div>
                      <AppsRoundedIcon style={{ fontSize: 28 }} />
                    </div>
                    <span style={{ fontSize: "0.7rem" }}>Work</span>
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="mx-3 my-auto" href="#home">
                <p
                  className="m-0 p-0 redLink text-center"
                  style={{ maxWidth: "6rem" }}
                >
                  Try Premium Free for 1 Month
                </p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default withRouter(MyNav);
