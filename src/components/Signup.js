import React from 'react';
import './Signup.css';

import {Link} from 'react-router-dom';

function Signup() {
  return (
        <form className='signup-form'>
        <h1>SIGNUP FORM</h1>
        <div class="signup-form-label">
            <label class="form-label" for="form3Example1c">Your Name</label>
            <input type="text" id="form3Example1c" class="form-control" placeholder="Name"/>
        </div>
        <div class="signup-form-label">
            <label class="form-label" for="form3Example4cd">Your Email</label>   
            <input type="password" id="form3Example4cd" class="form-control" placeholder="Email"/>
                       
        </div>
        <div class="signup-form-label">
            <label class="form-label" for="form3Example4cd">Password</label>   
            <input type="password" id="form3Example4cd" class="form-control" placeholder="Password" />
                       
        </div>

        <div class="signup-form-label">
            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
            <label class="form-check-label" for="form2Example3">
               I agree all statements in <a href="#!">Terms of service</a>
            </label>
        </div>
        <div className="signup-form-checkbox">
            <label className="create-acnt" htmlFor="create-acnt">  Already have an account? <Link to='/login'>Login here</Link></label>
        </div>

        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
            <button type="button" class="btn btn-primary btn-lg">Register</button>
        </div>

        </form>
        
  )
}

export default Signup;