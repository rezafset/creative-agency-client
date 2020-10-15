import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../resources/images/logos/logo.png';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav style={{ backgroundColor: '#FBD062'}} class="navbar navbar-expand-lg navbar-light animate__animated  animate__fadeInUp fixed-top">
            <div className="container">
                <Link to="/" class="navbar-brand">
                    <img className="brand-logo" src={logo} alt=""/>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item font-weight-bold active">
                            <a class="nav-link mr-3" href="#">Home</a>
                        </li>
                        <li class="nav-item font-weight-bold">
                            <a class="nav-link mr-3" href="#portfolio">Our Portfolio</a>
                        </li>
                        <li class="nav-item font-weight-bold">
                            <a class="nav-link mr-3" href="#team">Our Team</a>
                        </li>
                        <li class="nav-item font-weight-bold">
                            <a class="nav-link mr-3" href="#review">Review</a>
                        </li>
                        <li class="nav-item font-weight-bold">
                            <a class="nav-link mr-3" href="#contact">Contact Us</a>
                        </li>
                        <Link to="/login">
                            <button class="btn btn-dark text-light brand-button pb-2"> <span>Login</span> </button>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;