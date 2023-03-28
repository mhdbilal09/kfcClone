import React from 'react';
import './../App.css';
import './style.css';


//component


//images

import bsdkWaleChacha from '../images/bsdkChacha.gif';
import Navbar from '../Component/Navbar';

const LoginPage = () => {
  return (
    <>
    <Navbar/>
    <br /><br />
      <div className="container login">
        <div className="row">
          <div className="col-md-6">
          <img src={bsdkWaleChacha} alt="" />
          </div>
          <div className="col-md-6">
            <h1>Welcome!</h1>
          <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-danger form-control">Login</button>
</form>
          </div>


        </div>
      </div>
    </>
  );
}

export default LoginPage;
