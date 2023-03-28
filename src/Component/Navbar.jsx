import React from 'react';
import '../App.css';
import './compCss.css';

//brand image

import img1 from '../images/KFC-Logo-Red.png';

const Navbar = () => {
  return (
    <div className='container'>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={img1} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul> */}
    
      <form class="d-flex ms-auto">
        {/* <input class="form-control me-2 searchBox" type="search" placeholder="Search" aria-label="Search"/> */}
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle mx-1" type="button" id="dropdownMenuButton1" data-bs-toggle="modal" data-bs-target="#location" aria-expanded="false">
    Select Location
  </button>
  
<div class="modal fade" id="location" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel" >Select Location</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div className="container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.4075458308557!2d67.02674361437148!3d24.884076550440422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ff8523634e1%3A0xddc84eaa6da74d!2sKFC%20-%20Garden%20East!5e0!3m2!1sen!2s!4v1680037911116!5m2!1sen!2s" width="450" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div class="modal-footer">
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        <button type="button" class="btn btn-danger form-control">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
        <button class="btn btn-outline-danger mx-1 cartBtn" type="submit">0</button>
        <button class="btn btn-danger " type="submit">Login/Registration</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
