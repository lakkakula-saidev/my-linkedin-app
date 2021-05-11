import React, { Component } from "react";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

export default class About extends Component {
  render() {
    return (
      <div className="aboutCard">
        <div className="d-flex justify-content-between">
          <h3>About</h3>
          <EditOutlinedIcon />
        </div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
        blanditiis, quo eveniet consequatur laborum vel maiores illo, eaque
        tempore veniam delectus ut quis vitae doloribus, temporibus fuga
        corrupti inventore enim! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Harum ullam ipsam libero magni incidunt sequi tempore
        saepe consequuntur reiciendis nulla, molestiae debitis explicabo soluta
        iusto repellendus sunt. Repellat, dolor ipsum!
      </div>
    );
  }
}
