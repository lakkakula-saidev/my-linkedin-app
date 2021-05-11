
export default Interests

import React from "react";
import "../styles/Interests.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Container, Col, Media, ListGroup } from "react-bootstrap";
import { FaPlus, FaPen, FaAngleDown } from "react-icons/fa";

export default function Interests() {
  return (
    <Card className="interests-container my-2">
      <Card.Body>
        <Col>
          <Row className="justify-content-between">
            <Col className="d-flex justify-content-start">
              <Card.Title classname="card-title-expereince d-flex justify-content-start">
                Interests
              </Card.Title>
            </Col>
          </Row>
        </Col>

        <Row>
          <Col>
            <Media>
              <img
                width={64}
                height={64}
                className="align-self-center mr-3"
                src="https://via.placeholder.com/90x90"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5 className="d-flex">Strive School</h5>
                <p className="d-flex">1,136 followers</p>
              </Media.Body>
            </Media>
            <br />
          </Col>
          <Col>
            <Media>
              <img
                width={64}
                height={64}
                className="align-self-center mr-3"
                src="https://via.placeholder.com/90x90"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5 className="d-flex">Strive School</h5>
                <p className="d-flex">1,136 followers</p>
              </Media.Body>
            </Media>
            <br />
          </Col>
        </Row>

        <Row>
          <Col>
            <Media>
              <img
                width={64}
                height={64}
                className="align-self-center mr-3"
                src="https://via.placeholder.com/90x90"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5 className="d-flex">Strive School</h5>
                <p className="d-flex">1,136 followers</p>
              </Media.Body>
            </Media>
            <br />
          </Col>
          <Col>
            <Media>
              <img
                width={64}
                height={64}
                className="align-self-center mr-3"
                src="https://via.placeholder.com/90x90"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5 className="d-flex">Strive School</h5>
                <p className="d-flex">1,136 followers</p>
              </Media.Body>
            </Media>
            <br />
          </Col>
        </Row>

        <Row>
          <Col>
            <Media>
              <img
                width={64}
                height={64}
                className="align-self-center mr-3"
                src="https://via.placeholder.com/90x90"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5 className="d-flex">Strive School</h5>
                <p className="d-flex">1,136 followers</p>
              </Media.Body>
            </Media>
            <br />
          </Col>

          <Col>
            <Media>
              <img
                width={64}
                height={64}
                className="align-self-center mr-3"
                src="https://via.placeholder.com/90x90"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5 className="d-flex">Strive School</h5>
                <p className="d-flex">1,136 followers</p>
              </Media.Body>
            </Media>
            <br />
          </Col>
        </Row>
      </Card.Body>
      <ListGroup.Item action>
        See all
        <FaAngleDown />
      </ListGroup.Item>
    </Card>
  );
}
