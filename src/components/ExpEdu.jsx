import React from "react";
import { Row, Col } from "react-bootstrap";
import ExpForm from "./ExpForm";
import "../ExpEdu.css";

class ExperienceEducation extends React.Component {
  state = { showForm: false };

  render() {
    return (
      <>
        <Row
          style={{
            padding: "24px",
            backgroundColor: "white",
            borderRadius: "15px",
            marginTop: "20px",
          }}
        >
          <div className="d-flex mb-2 justify-content-between">
            <h6>Experience</h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => this.setState({ showForm: true })}
              className="plus"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
            </svg>
          </div>
          <div className="d-flex mb-3 justify-content-between">
            <div className="d-flex justify-content-between">
              <img src="https://www.vouchercodes.co.uk/static/v10/images/merchant/logo/128px/825_180920143441.png"></img>
              <div className="ml-3">
                <h6>Advertising Specilist</h6>
                <p>Boohoo Man</p>
                <span>Jun 2018 – Present . 3 yr 5 mos</span>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
              </svg>
            </div>
          </div>

          <hr></hr>

          <div className="d-flex mb-2 justify-content-between">
            <h6>Education</h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
            </svg>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <img src="https://static.yocket.in/images/universities/logos/the-university-of-manchester.jpg"></img>
              <div>
                <h6>Manchester University</h6>
                <p>BSc Management</p>
                <span>2018 - 2021 </span>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
              </svg>
            </div>
          </div>
          <ExpForm
            show={this.state.showForm}
            closeFunc={() => this.setState({ showForm: false })}
          />
        </Row>
      </>
    );
  }
}

export default ExperienceEducation;
