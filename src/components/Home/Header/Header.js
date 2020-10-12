import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <NavBar></NavBar>
            <MainHeader></MainHeader>
        </div>
    );
};

export default Header;