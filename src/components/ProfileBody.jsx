import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import RightSideBar from "./RightSideBar";
import Footer from "./Footer";
import ProfilePage from "./ProfilePage";
import { Link, withRouter } from "react-router-dom";

export class HomeBody extends Component {
  render() {
    return (
      <div>
        <Container className="mainContainer">
          <Row className="row">
            <Col md={8} lg={8}>
              <ProfilePage />
            </Col>
            <Col md={4} lg={3} className=" my-sm-4 my-md-0 my-lg-0 ">
              <RightSideBar />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(HomeBody);
