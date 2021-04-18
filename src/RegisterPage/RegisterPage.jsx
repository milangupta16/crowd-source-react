import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { userActions } from '../_actions';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function RegisterPage() {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: '',
        typedEmail: '',
        isDuplicateUser: false
    });
    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();



        setSubmitted(true);
        if (user.firstName && user.lastName && user.username && user.password && user.email) {
            dispatch(userActions.register(user));
        }


    }

     function handleOnChange(e) {
         user.isDuplicateUser =  axios.get(
          'http://localhost:8087/isDuplicateUser',{params:{user:user.username}}
        ).then(res => {
            console.log(res && res.data);
           
          })
        console.log( user.isDuplicateUser);

        if(user.isDuplicateUser)
        {
            console.log("inside func");
            const { name, value } = e.target;
            setUser(user => ({ ...user, [name]: value }));
        }
        
        }
       function emailInputClassName() {
            if (user.typedEmail) {
              return user.isDuplicateUser ? 'is-invalid' : 'is-valid';
            }
            return '';
          }
          
    function renderFeedbackMessage() {
        if (user.typedEmail) {
          return user.isDuplicateUser ? (
            <div className="invalid-feedback"></div>
          ) : (
            <div className="valid-feedback"></div>
          );
        }
      }
    
    return (

        <div className="col-lg-8 offset-lg-2">
            <h2>Register</h2>
            <hr></hr>
            <Form name="form" onSubmit={handleSubmit}>
             <Form.Group  className="form-group">
                 <Form.Label>Email address</Form.Label>
                 <Form.Control type="email" name="email"  placeholder="abc@gmail.com" value={user.email} onChange={handleChange} className={'form-control' + (submitted && !user.email ? ' is-invalid' : '')} />
                    {submitted && !user.email &&
                        <div className="invalid-feedback">Email is required</div>
                    }
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstName" placeholder="Enter First Name" value={user.firstName} onChange={handleChange} className={'form-control' + (submitted && !user.firstName ? ' is-invalid' : '')} />
                    {submitted && !user.firstName &&
                        <div className="invalid-feedback">First Name is required</div>
                    }
                 </Form.Group>
                 <Form.Group  className="form-group">
                 <Form.Label>Last Name</Form.Label>
                 <Form.Control type="text" name="lastName" placeholder="Enter Last Name" value={user.lastName} onChange={handleChange} className={'form-control' + (submitted && !user.lastName ? ' is-invalid' : '')} />
                    {submitted && !user.lastName &&
                        <div className="invalid-feedback">Last Name is required</div>
                    }
                </Form.Group>
                <Form.Group  className="form-group">
                <Form.Label>UserName</Form.Label>
                <Form.Control type="text" name="username" placeholder="Enter username" value={user.username}   onChange={handleOnChange} className={'form-control' + (submitted && (!user.username && user.isDuplicateUser) ? ' is-invalid' : '')}/>
                    {submitted && !user.username &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                 </Form.Group>
                 <Form.Group  className="form-group">
                 <Form.Label>Password</Form.Label>
                 <Form.Control type="password" name="password" placeholder="Enter Password" value={user.password} onChange={handleChange} className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} />
                    {submitted && !user.password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                    
                </Form.Group>
    
                    <button className="btn btn-primary"   variant="primary" >
                        {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Register
                    </button>
                    <Link to="/login" className="btn btn-link">Already have an account?</Link>

            </Form>
        </div>
    );
}

export { RegisterPage };