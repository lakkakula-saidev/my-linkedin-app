import React from "react"
import { Container, Row, Col } from "react-bootstrap"


    render() { 
        return (
            <Container className="pt-5">
                <Row>
                    <Col className="px-0" md={3}></Col>
                    <Col md={6}>
                        <Row>

                            <Col className="px-0 my-1" xs={12}>
                                <div className="d-flex alig">
                                    <hr className="flex-grow-1 me-2" style={{ color: "grey" }}></hr>
                                    <div>
                                        <span>Sort by:</span> <strong>Top</strong>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </Container>
        )
    }
export default Feed