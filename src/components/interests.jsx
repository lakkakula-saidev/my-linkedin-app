import React from "react"
import { Row, Col } from "react-bootstrap"


class Interests extends React.Component {

    render() {
        return (
            <>
                <Col className="mt-4 mb-4 section-outer section-inner">
                    <h6>Interests</h6>
                    <Row>

                        <Col md={6}>
                            <div className="mb-2 d-flex">
                                <img className="medium-logo" src="https://media-exp1.licdn.com/dms/image/C4D0BAQHMzEZdUDzWLw/company-logo_100_100/0/1607610827235?e=1628726400&v=beta&t=2DyogaeKHlEJ4FJcFv2DpjEkXpRJ325JlCvt6KMJI_E">
                                </img>

                                <div className="ms-3">
                                    <h6>Ministry of Housing, Communities and Local Government</h6>
                                    <span className="text-muted">42,355 followers</span>

                                </div>
                            </div>
                            </Col>
                            <Col md={6}>
                                <div className="mb-2 d-flex">
                                    <img className="medium-logo" src="https://media-exp1.licdn.com/dms/image/C4E0BAQF5t62bcL0e9g/company-logo_100_100/0/1519855919126?e=1628726400&v=beta&t=MJ7aXvNHbhY_WijBVVZztYsa9YUDftiM3CU5ObSMYtk">
                                    </img>

                                    <div className="ms-3">
                                        <h6>Harvard University</h6>
                                        <span className="text-muted">1,629,041 followers</span>

                                    </div>
                                </div>
                            </Col>

                        
                        <Col md={6}>
                            <div className="d-flex">
                                <img className="medium-logo" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
                                </img>

                                <div className="ms-3">
                                    <h6>Premium Career Group</h6>
                                    <span className="text-muted">2,477,791 members</span>

                                </div>
                            </div>

                        </Col>
                    </Row>
                </Col>
            </>
        )
    }
}

export default Interests