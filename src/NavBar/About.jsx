import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


export class About extends Component {
    render() {
        return (


            <Card className="text-center">
  <Card.Header>Crowd Source</Card.Header>
  <Card.Body>
    <Card.Title>About</Card.Title>
    <Card.Text>
    A Crowdsourcing web application for users 
                    where any user can register themselves and they can 
                    list the items they want to sell items which they want to give away...
                    other normal users signup to the platform and can see if anything 
                    intrests them and if they are willing to take the item then they can 
                    post for the item and the highest bidder will get the item ..
    </Card.Text>
    <Button variant="primary">Thanks</Button>
  </Card.Body>
  <Card.Footer className="text-muted">Developed by Jeet Kanakhara and Milan Gupta </Card.Footer>
</Card>
           
        )
    }
}

export default About
