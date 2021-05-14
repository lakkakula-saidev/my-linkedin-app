import React from "react";
import { Row } from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ExpForm from "./ExpForm";
import "../ExpEdu.css";
import { format, parseISO } from "date-fns";
import LOAD_API from "./LOAD_API";

class ExperienceEducation extends React.Component {
  state = {
    Experience: [],
    showForm: false,
    user_id: this.props.user_id,
    newExperience: false,
    editExperience: {},
    delValue: false,
    isLoading: false,
    checked: false,
    emptyExperience: {
      role: "",
      company: "",
      area: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  };

  async componentDidMount() {
    const [data, loadBool] = await LOAD_API(
      this.props.user_id,
      "profile",
      "experiences"
    );
    this.setState({ Experience: data, isLoading: loadBool });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.showForm !== this.state.showForm) {
      /* console.log("this function is invoked"); */
      const [data, loadBool] = await LOAD_API(
        this.props.user_id,
        "profile",
        "experiences"
      );
      this.setState({ Experience: data, isLoading: loadBool });
      console.log(this.state.Experience);
    }
  }

  render() {
    return (
      <>
        <div
          className="d-flex flex-column"
          style={{
            padding: "24px",
            backgroundColor: "white",
            borderRadius: "15px",
            marginTop: "20px",
          }}
        >
          <div className="d-flex mb-4 justify-content-between">
            <h5>Experience</h5>

            <div
              className="addExp"
              onClick={() =>
                this.setState({ showForm: true, editExperience: {} })
              }
            >
              <AddIcon />
            </div>
          </div>
          {this.state.Experience.map((item, id) => (
            <div className="d-flex mb-3 justify-content-flex-start divExp">
              <div>
                <img
                  src="https://www.vouchercodes.co.uk/static/v10/images/merchant/logo/128px/825_180920143441.png"
                  style={{ width: "75px", height: "75px", marginRight: "20px" }}
                ></img>
              </div>

              <div className="d-flex flex-column w-100">
                <div className="d-flex justify-content-between expClass0">
                  <div className="d-flex flex-column ml-3 expClass">
                    <h6>{item.role}</h6>
                    <p className="workCompany">{item.company}</p>
                    <p className="expDetails">
                      {format(parseISO(item.startDate), "yyyy-MMM-dd")} {"to "}
                      {item.endData !== ""
                        ? format(parseISO(item.endDate), "yyyy-MMM-dd")
                        : "present"}
                    </p>
                    <p className="expDetails">{item.area}</p>
                  </div>

                  <div
                    className={id === 0 ? "specialeditExp" : "editExp"}
                    id={item._id}
                    onClick={(e) =>
                      this.setState({ showForm: true, editExperience: item })
                    }
                  >
                    <EditOutlinedIcon />
                  </div>
                </div>
                <div>
                  <hr></hr>
                </div>
              </div>
            </div>
          ))}

          <ExpForm
            editExperience={this.state.editExperience}
            user_id={this.state.user_id}
            show={this.state.showForm}
            emptyExperience={this.state.emptyExperience}
            cancelForm={() => this.setState({ showForm: false })}
            closeForm={(bol) =>
              this.setState({
                showForm: false,
                isClosed: true,
              })
            }
          />
        </div>
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

/* console.log(this.state.newExperience); */
/*     async componentDidUpdate(prevProps, prevState) {
    if (prevState.newExperience !== this.state.newExperience) {
      if (this.state.delValue === true) {
        console.log("delete");
        await this.putExperience(
          prevState.editExperience._id,
          this.state.newExperience,
          "DELETE"
        );
        DELETE_API(
          this.state.newExperience,
          user_id,
          prevState.editExperience._id,
          "profile",
          "experience"
        );

        await this.loadExperience(this.props.user_id);
        await this.setState({ delValue: false });
      } else if (prevState.editExperience !== {}) {
        console.log("put");

        await this.putExperience(
          prevState.editExperience._id,
          this.state.newExperience,
          "PUT"
        );
        await this.loadExperience(this.props.user_id);
      } else {
        console.log("post");
        POST_API(
          this.state.newExperience,
          this.props.user_id,
          "profile",
          "experiences"
        );

        this.loadExperience(this.props.user_id);
      }
    } 
  } */

/* else if (prevState.editExperience !== {}) {
      this.putExperience(prevState.editExperience);
      this.loadExperience(this.props.user_id);
    } */

/* {
  format(parseISO(item.startDate), "yyyy-MMM-dd");
}
}
{
  item.endData !== ""
    ? format(parseISO(item.endDate), "yyyy-MMM-dd")
    : "present";
} */
