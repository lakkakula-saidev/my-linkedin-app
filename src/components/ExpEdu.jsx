import React from "react";
import { Row, Col } from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ExpForm from "./ExpForm";
import "../ExpEdu.css";

class ExperienceEducation extends React.Component {
  state = {
    Experience: [],
    showForm: false,
    user_id: this.props.user_id,
  };

  async loadExperience(id) {
    console.log(id);
    const endpoint = ` https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`;

    try {
      let response = await fetch(endpoint, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZTllNDYxOWU1ZDAwMTUxZjhmNzkiLCJpYXQiOjE2MjA2MzQwODUsImV4cCI6MTYyMTg0MzY4NX0.LVFiiWvC5hj_tkyYlnYiUZd9DafCRH7foRwmjGXSjPM",
        },
      });
      if (response.ok) {
        response = await response.json();
        this.setState({
          Experience: response,
        });
        this.setState({ isLoading: !this.state.isloading });
        console.log(this.state.Experience);
      }
    } catch (error) {
    } finally {
    }
  }

  componentDidMount() {
    this.loadExperience(this.props.user_id);
  }
  /*  async loadSingleExperience(id) {
    const endpoint = `  https://striveschool-api.herokuapp.com/api/profile/${this.state.user_id}/experiences/${id}`;

    try {
      let response = await fetch(endpoint, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZTllNDYxOWU1ZDAwMTUxZjhmNzkiLCJpYXQiOjE2MjA2MzQwODUsImV4cCI6MTYyMTg0MzY4NX0.LVFiiWvC5hj_tkyYlnYiUZd9DafCRH7foRwmjGXSjPM",
        },
      });
      if (response.ok) {
        response = await response.json();
        this.setState({
          Experience: response,
        });
        this.setState({ isLoading: !this.state.isloading });
        console.log(this.state.Experience);
      }
    } catch (error) {
    } finally {
    }
  } */

  render() {
    return (
      <>
        <Row
          className="d-flex flex-column"
          style={{
            padding: "24px",
            backgroundColor: "white",
            borderRadius: "15px",
            marginTop: "20px",
          }}
        >
          <div className="d-flex mb-2 justify-content-between">
            <h6>Experience</h6>

            <div onClick={() => this.setState({ showForm: true })}>
              <AddIcon />
            </div>
          </div>
          {this.state.Experience.map((item) => (
            <div className="d-flex mb-3 justify-content-between">
              <div className="d-flex justify-content-between">
                <img
                  src="https://www.vouchercodes.co.uk/static/v10/images/merchant/logo/128px/825_180920143441.png"
                  style={{ width: "75px", height: "75px" }}
                ></img>
                <div className="ml-3">
                  <h6>{item.role}</h6>
                  <p>{item.company}</p>
                  <span>
                    {item.startDate} –
                    {item.endData !== "" ? item.endData : "present"}
                  </span>
                </div>
              </div>
              <div>
                <div
                  id={item._id}
                  /*  onClick={(e) => this.loadSingleExperience(e.target.id)} */
                >
                  <EditOutlinedIcon />
                </div>
              </div>
            </div>
          ))}
          <hr></hr>
          <ExpForm
            user_id={this.state.user_id}
            show={this.state.showForm}
            closeFunc={() => this.setState({ showForm: false })}
          />
        </Row>
      </>
    );
  }
}

export default ExperienceEducation;

{
  /* <div className="d-flex mb-2 justify-content-between">
                        <h6>Education</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                            </svg>
                        </div>
                    </div> */
}
