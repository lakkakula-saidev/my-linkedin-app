import { Row, Col } from "react-bootstrap"
import "../styles/ExpEduCard.css"

const ExpEduCard = (props) => {
  return (
    <Row className="my-4">
      <Col xs={2}>
        <img className="img-fluid px-3" src={props.img} />
      </Col>

      <Col xs={10}>
        <span className="title">{props.jobOrSchool}</span>
        <br />
        {props.companyOrSubject}
        <br />
        <span className="subtitle">
          {props.duration}
          <br />
          {props.location}
          <br />
        </span>
        {props.description}
      </Col>
    </Row>
  )
}

export default ExpEduCard
