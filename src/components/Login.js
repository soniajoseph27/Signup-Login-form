import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

function Login(){
  return (
  <form className='login-form'>
  <h1>LOGIN FORM</h1>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group">
    
    <label className="create-acnt" htmlFor="create-acnt">Don't have an account? <Link to='/signup'>Create</Link></label>
  </div>
  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
            <button type="button" class="btn btn-primary btn-lg">Submit</button>
        </div>
</form>
  );
}

export default Login;
