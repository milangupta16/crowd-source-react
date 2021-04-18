import React from 'react'
import { Link } from 'react-router-dom';

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'


const ProfilePage = () => {
    const name=localStorage.getItem("name");
    return (
        <div>

        <Jumbotron >
        <h1>Hello, {name}!</h1>
        <p>
        Join the buying and selling marketplace that makes second hand feel like a joy.
        </p>
       
        <Link to="/additem"  className="btn btn-link  btn-primary btn-lg active">Request A Item</Link>
        <hr></hr>
     
        <Link to="/showallitems" className="btn btn-link btn-primary btn-lg active">Post a Item</Link>
        <hr></hr>
        <Link to="/showallreqitems" className="btn btn-link btn-primary btn-lg active">See All Items Requested By You</Link>
        {/* <p>
            <Button variant="primary">Learn more</Button>
        </p> */}
        </Jumbotron>
          
            
        </div>
    )
}

export {ProfilePage};
