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

import {
  Navbar,
  Form,
  Button,
  Nav,
  NavDropdown,
  FormControl,
  InputGroup,
} from "react-bootstrap";

class MyNav extends Component {
  render() {
    return (
      <>
        <Navbar
          style={{ position: "fixed", top: 0, height: "4em" }}
          className=" w-100 p-0 "
          bg="light"
          expand="lg"
        >
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <div className="px-5"></div>
          <LinkedInIcon style={{ color: "rgb(10,102,194)", fontSize: 50 }} />

          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon3">
                {<SearchIcon style={{ backgroundColor: "rgb(238,243,248)" }} />}
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              id="basic-url"
              placeholder="Search"
              style={{ backgroundColor: "rgb(238,243,248)" }}
              type="text"
              aria-describedby="basic-addon3"
            />
          </InputGroup>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="align-items: center ">
              <Nav.Link className="mx-3 my-auto" href="#home">
                {<HomeRoundedIcon style={{ fontSize: 33 }} />}
                <p className="m-0 p-0 ">Home</p>
              </Nav.Link>
              <Nav.Link className="mx-3 my-auto" href="#MyNet">
                {<PeopleAltRoundedIcon style={{ fontSize: 33 }} />}
                <p className="m-0">My Network</p>
              </Nav.Link>
              <Nav.Link className="mx-3 my-auto" href="#Jobs">
                {<WorkRoundedIcon style={{ fontSize: 33 }} />}
                <p className="m-0 text-center">Jobs</p>
              </Nav.Link>
              <Nav.Link className="mx-3 my-auto" href="#Messaging">
                {<SmsRoundedIcon style={{ fontSize: 33 }} />}
                <p className="m-0 text-center">Messaging</p>
              </Nav.Link>
              <Nav.Link className="mx-3 my-auto" href="#Noti">
                {<NotificationsRoundedIcon style={{ fontSize: 33 }} />}
                <p className="m-0 ">Notifications</p>
              </Nav.Link>

              <NavDropdown
                className="my-auto"
                title={
                  <>
                    <div>
                      <PersonRoundedIcon style={{ fontSize: 40 }} />
                    </div>
                    <span>Me</span>
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
              <div className="br" style={{ height: "4.7rem" }}>
                {" "}
              </div>
              <NavDropdown
                className="my-auto"
                title={
                  <>
                    <div>
                      <AppsRoundedIcon style={{ fontSize: 40 }} />
                    </div>
                    <span>Work</span>
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
                <p className="m-0 p-0" style={{ fontSize: "0.6rem" }}>
                  Try Premium Free for 1 Month
                </p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default MyNav;
