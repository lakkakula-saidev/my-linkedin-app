/** @format */

import { Component } from "react";
import { Col, Row, Container, Card, Button, Table, Figure } from "react-bootstrap";
import pic from "../leoAssets/ciao.jpg";
import "../styleLeo.css"

import React from "react";

class RightSideBar extends Component {
  state = {
    reservations: [], // initial state as an empty array, so can immediately map it out in the render
    isLoading: false,
    isError: false,
  };

  componentDidMount = async () => {
    console.log("you should see this console.log just once every reload");

    // let's fetch our data!
    try {
      this.setState({
        isLoading: true,
      });

      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk5MDI1YTYxOWU1ZDAwMTUxZjhmODQiLCJpYXQiOjE2MjA2NDAzNDcsImV4cCI6MTYyMTg0OTk0N30.TKN-9r8r9lxsl0FC7H-Iga71LYTagaSza3FmFynfKwE",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({ reservations: data, isError: false, isLoading: false });
      } else {
        console.log("houston we got an error");
        this.setState({ isError: true, isLoading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isError: true, isLoading: false });
    }
  };

  render() {
    let array = this.state.reservations.splice()
    // render is not suitable for putting a fetch
    // render is fired multiple times during the lifecycle of a component
    // render will be invoked again every time there's a change in the STATE or in the PROPS

    // I cannot put the fetch here
    // and I cannot set the state here either
    // this.setState({ reservations: ['stefano'] })

    return (
       
      <>
        <Container>
          {/* <Row xs={1} md={1} lg={1} style={{ backgroundColor: "" }}> */}
            < Col xs={1} md={12} lg={12} style={{ backgroundColor: "white" }} className = "borderR">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant='top' src={pic} />
              </Card>
            </Col>
            <Col xs={1} md={1} lg={1} className = "borderR">
              <h6>Other people</h6>

              {
                  
                 
             this.state.reservations.slice(0, 8).map(user => (
                <Figure key={user._id}>
                <Figure.Image
                  width={171}
                  height={180}
                  alt='171x180'
                  src={user.image}
                  className = "borderR"
                  
                />
                <Figure.Caption>
             <p>{user.name} 3°+</p>
             <p>{user.title}</p>
                </Figure.Caption>
                <Button className = "borderR" variant="outline-secondary">Connect</Button>{' '}
              </Figure>

             ))
                 
               
              
             }
             
            </Col>
            <Col xs={1} md={1} lg={1} className = "borderR">
            <h6 >People you may know</h6>
            {
             
                  
                 
                  this.state.reservations.slice(0, 8).map(user => (
                     <Figure key={user._id}>
                     <Figure.Image
                       width={171}
                       height={180}
                       alt='171x180'
                       src={user.image}
                       className = "borderR"
                       
                     />
                     <Figure.Caption className = "right">
                  <p>{user.name} 3°+</p>
                  <p>{user.title}</p>
                     </Figure.Caption>
                     <Button className = "borderR" variant="outline-secondary">Connect</Button>{' '}
                    
                   </Figure>
                   
                    

     
                  ))
                      
                    
                   
                  }
            </Col>
          {/* </Row> */}
        </Container>
      </>
    );
  }
}

export default RightSideBar;
