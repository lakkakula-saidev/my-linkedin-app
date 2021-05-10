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
} from "react-bootstrap";

class MyNav extends Component {
  render() {
    return (
      <>
        <Navbar
          style={{ position: "fixed", top: 0 }}
          className=" w-100"
          bg="light"
          expand="lg"
        >
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <div className="px-5"></div>
          <LinkedInIcon style={{ color: "rgb(10,102,194)", fontSize: 40 }} />
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link className="mx-3" href="#home">
                {<HomeRoundedIcon style={{ fontSize: 33 }} />}
                <p className="m-0 text-center">Home</p>
              </Nav.Link>
              <Nav.Link className="mx-3" href="#link">
                {<PeopleAltRoundedIcon style={{ fontSize: 33 }} />}
                <p className="m-0 text-center">My Network</p>
              </Nav.Link>
              <Nav.Link className="mx-3" href="#link">
                {<WorkRoundedIcon style={{ fontSize: 33 }} />}
                <p className="m-0 text-center">Jobs</p>
              </Nav.Link>
              <Nav.Link className="mx-3" href="#link">
                {<SmsRoundedIcon style={{ fontSize: 33 }} />}
                <p className="m-0 text-center">Messaging</p>
              </Nav.Link>
              <Nav.Link className="mx-3" href="#link">
                {<NotificationsRoundedIcon style={{ fontSize: 33 }} />}
                <p className="m-0 ">Notifications</p>
              </Nav.Link>
              <NavDropdown
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
              <div className="br"> </div>
              <NavDropdown
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
              <Nav.Link className="mx-3" href="#home">
                Try Premium Free for 1 Month
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default MyNav;
