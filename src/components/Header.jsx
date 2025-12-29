import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="header-logo">
                        <Link to="/" className="logo-link" onClick={closeMobileMenu}>
                            <img src="/ttt-1.png" alt="The True Table" className="logo-image" />
                        </Link>
                    </div>

                    {/* Hamburger Icon */}
                    <button
                        className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="header-nav desktop-nav">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/categories" className="nav-link">Categories</Link>
                        <Link to="/waitlist" className="nav-link nav-link-secondary">Join Waitlist</Link>
                        <a href="https://wa.me/919989520792" target="_blank" rel="noopener noreferrer" className="nav-link nav-link-primary">Contact Us</a>
                    </nav>

                    {/* Mobile Navigation */}
                    <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
                        <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>Home</Link>
                        <Link to="/categories" className="mobile-nav-link" onClick={closeMobileMenu}>Categories</Link>
                        <Link to="/waitlist" className="mobile-nav-link" onClick={closeMobileMenu}>Join Waitlist</Link>
                        <a href="https://wa.me/919989520792" target="_blank" rel="noopener noreferrer" className="mobile-nav-link" onClick={closeMobileMenu}>Contact Us</a>
                    </nav>

                    {/* Overlay */}
                    {mobileMenuOpen && <div className="mobile-overlay" onClick={closeMobileMenu}></div>}
                </div>
            </div>
        </header>
    );
}

export default Header;
