import React from 'react';
import logo from '../../images/logo2.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="nav-bar">
                <nav>
                    <a href="/home">Home</a>
                    <a href="/players">Players</a>
                    <a href="/history">History</a>
                    <a href="/blog">Blog</a>
                    <a href="/contact">Contact</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;