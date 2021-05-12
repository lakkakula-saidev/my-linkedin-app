import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Post from "./Post";
import { Col, Row } from "react-bootstrap";

export class HomePage extends Component {
  render() {
    return (
      <Container className="mainContainer ">
        <Row>
          <Col md={2}></Col>
          <Col md={7}>
            <Post />
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
