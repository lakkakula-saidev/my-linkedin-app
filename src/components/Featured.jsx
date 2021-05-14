import React, { Component } from "react";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import AddIcon from "@material-ui/icons/Add";

export default class Featured extends Component {
  render() {
    return (
      <div className="aboutCard">
        <div className="d-flex justify-content-between">
          <h5 className="sectionTitle">Featured</h5>
          <div className="d-flex justify-content-between">
            <div className="Icon">
              <AddIcon />
            </div>
            <div className="Icon">
              <EditOutlinedIcon />
            </div>
          </div>
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
