import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../resources/images/logos/logo.png';

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link to="/" class="navbar-brand">
                    <img className="brand-logo" src={logo} alt=""/>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link mr-3" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-3" href="#">Our Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-3" href="#">Our Team</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-3" href="#">Contact Us</a>
                        </li>
                        <Link to="/login">
                            <button class="btn btn-dark text-light brand-button pb-2">Login</button>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;