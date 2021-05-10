import React from "react"
import { Row, Col } from "react-bootstrap"

class ExperienceEducation extends React.Component {

    render() {

        return (
            <>
                <Row style={{ padding: "24px", backgroundColor: "white", borderRadius: "15px", marginTop: "20px" }}>
                    <div className="d-flex mb-2 justify-content-between">
                        <h6>Experience</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                        </svg>
                    </div>
                    <div className="d-flex mb-3 justify-content-between">
                        <div className="d-flex justify-content-between">
                            <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQHMzEZdUDzWLw/company-logo_100_100/0/1607610827235?e=1628726400&v=beta&t=2DyogaeKHlEJ4FJcFv2DpjEkXpRJ325JlCvt6KMJI_E"></img>
                            <div className="ml-3">
                                <h6>Advertising Specilist</h6>
                                <p>Boohoo Man</p>
                                <span>Jun 2018 – Present . 3 yr 5 mos</span>

                            </div>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                            </svg>
                        </div>
                    </div>

                    <hr></hr>

                    <div className="d-flex mb-2 justify-content-between">
                        <h6>Education</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                        </svg>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQF5t62bcL0e9g/company-logo_100_100/0/1519855919126?e=1628726400&v=beta&t=MJ7aXvNHbhY_WijBVVZztYsa9YUDftiM3CU5ObSMYtk"></img>
                            <div>
                                <h6>Harvard University</h6>
                                <p>CS50: Introduction to Computer Science, Computer Science</p>
                                <span>2021 - 2021 </span>

                            </div>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                            </svg>
                        </div>
                    </div>

                </Row>
            </>
        )
    }
}

export default ExperienceEducation