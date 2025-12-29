import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="header-logo">
                        <Link to="/" className="logo-link">
                            <img src="/ttt-1.png" alt="The True Table" className="logo-image" />
                        </Link>
                    </div>

                    <nav className="header-nav">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/categories" className="nav-link">Categories</Link>
                        <Link to="/waitlist" className="nav-link nav-link-secondary">Join Waitlist</Link>
                        <a href="https://wa.me/919989520792" target="_blank" rel="noopener noreferrer" className="nav-link nav-link-primary">Contact Us</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
