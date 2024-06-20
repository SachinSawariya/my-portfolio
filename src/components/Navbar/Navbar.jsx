import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import Toggle from '../Toggle/Toggle';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="wrapper">
            <div className="n-left">
                <div className="n-name">Sachin</div>
                <Toggle />
            </div>
            <div className="n-right">
                <button className="hamburger" onClick={toggleMenu}>
                    &#9776;
                </button>
                <div className={`n-list ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <Link spy={true} to='Home' smooth={true} activeClass="activeClass">
                            <li onClick={toggleMenu}>Home</li>
                        </Link>
                        <Link spy={true} to='About' smooth={true}>
                            <li onClick={toggleMenu}>About</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                            <li onClick={toggleMenu}>Services</li>
                        </Link>
                        <Link spy={true} to='Projects' smooth={true}>
                            <li onClick={toggleMenu}>Projects</li>
                        </Link>
                        <Link spy={true} to='Testimonial' smooth={true}>
                            <li onClick={toggleMenu}>Testimonial</li>
                        </Link>
                    </ul>
                </div>
                <Link spy={true} to='Contacts' smooth={true}>
                    <button className="button n-btn">Contact us</button>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
