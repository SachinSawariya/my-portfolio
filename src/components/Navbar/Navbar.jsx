import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Add scroll listener for sticky navbar effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-logo">
                    <Link spy={true} to='home' smooth={true} onClick={() => setMenuOpen(false)} className="logo-link">
                        <svg className="logo-icon" viewBox="0 0 24 24" fill="#ff004f" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.3L19.5 8.6L12 12.9L4.5 8.6L12 4.3ZM4.5 15.4V10.3L11 14V20.2L4.5 15.4ZM13 20.2V14L19.5 10.3V15.4L13 20.2Z"/>
                        </svg>
                        <span className="logo-text">SACHIN</span>
                    </Link>
                </div>
                
                <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li><Link spy={true} to='home' smooth={true} activeClass="active" onClick={toggleMenu}>Home</Link></li>
                        <li><Link spy={true} to='About' smooth={true} activeClass="active" onClick={toggleMenu}>About</Link></li>
                        <li><Link spy={true} to='Experience' smooth={true} activeClass="active" onClick={toggleMenu}>Experience</Link></li>
                        <li><Link spy={true} to='Services' smooth={true} activeClass="active" onClick={toggleMenu}>Services</Link></li>
                        <li><Link spy={true} to='Projects' smooth={true} activeClass="active" onClick={toggleMenu}>Projects</Link></li>
                    </ul>
                    <Link spy={true} to='Contacts' smooth={true} className="nav-cta" onClick={() => setMenuOpen(false)} style={{ cursor: 'pointer' }}>Contact Us</Link>
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
