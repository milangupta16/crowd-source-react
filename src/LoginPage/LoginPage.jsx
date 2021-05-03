import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';


const imgstyle = {

   float: 'left',
   width:'50%',
   height: '400px'
}

const loginstyle ={

    textAlign : 'left',
    width: '550px',
   marginLeft:'55%',

}

const bodystyle ={
    height:"480px",
    backgroundSize: "cover",
   
    backgroundColor: "#f1f1f5"
}

function LoginPage() {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();
    const location = useLocation();

    // reset login status
    useEffect(() => { 
        dispatch(userActions.logout()); 
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (username && password) {
            // get return url from location state or default to home page
            const { from } = location.state || { from: { pathname: "/" } };
            dispatch(userActions.login(username, password, from));
        }
    }
  

    return (
        <div style={bodystyle} >
            <div> 

            <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/20-free-things-you-need-to-do-after-launching-your-ecommerce-website-5e664bcb60da5-760x400.png" alt="webimage" style={imgstyle} />
           

            </div>
        <div style ={loginstyle} className="col-lg-8 offset-lg-2">
            <h2>Login</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
                    {submitted && !username &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Login
                    </button>
                    <Link to="/register" className="btn btn-link">Register</Link>
                </div>
            </form>
        </div>
    </div>
    );
}

export { LoginPage };