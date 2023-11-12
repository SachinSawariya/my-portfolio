import React from 'react'
import './Navbar.css';
import { Link } from 'react-scroll';
import Toggle from '../Toggle/Toggle'

function Navbar() {
    return (
        <div className="wrapper">
            <div className="n-left">
                <div className="n-name">Sachin</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <Link spy={true} to='Home' smooth={true} activeClass="activeClass">
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='About' smooth={true}>
                            <li>About</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                            <li>Services</li>
                        </Link>
                        <Link spy={true} to='Projects' smooth={true}>
                        <li>Projects</li>
                        </Link>
                        <Link spy={true} to='Testimonial' smooth={true}>
                            <li>Testimonial</li>
                            
                        </Link>
                    </ul>
                </div>
                <Link spy={true} to='Contacts' smooth={true}>
                    <button className="button n-btn">Contact us</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
