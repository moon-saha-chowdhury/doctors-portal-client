import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav  ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link className="nav-link ms-5" to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link ms-5" to="/login">Login</Link>
      </li>
        <li class="nav-item">
        <Link className="nav-link ms-5" to="/dashboard">Dashboard</Link>
      </li>
        <li class="nav-item">
        <Link className="nav-link ms-5 text-white" to="/dashboard">Admin</Link>
      </li>
        <li class="nav-item">
        <Link className="nav-link ms-5 text-white" to="#">Blogs</Link>
      </li>
        <li class="nav-item">
        <Link className="nav-link ms-5 text-white" to="#">Contact Us</Link>
      </li>
      </ul>
      
    </div>
  </div>
</nav>
    );
};

export default Navbar;