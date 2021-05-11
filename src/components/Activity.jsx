  
import React from "react"
import { Row, Col } from "react-bootstrap"


class Activity extends React.Component {

    render() {
        return (
            <>
             <Row style={{ padding: "24px", backgroundColor: "white", borderRadius: "15px", marginTop: "20px" }}>
             <div>
                <h5>Acitivity</h5>
                <span>1 follower</span>
             </div>
            <p>Posts Hamza  created, shared, or commented on in the last 90 days are displayed here.</p>
             <hr></hr>
             <h6 className="text-center">See all acitivity</h6>
             </Row>
            </>
        )
    }
}

export default Activity