import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container text-center">
                <p className="footer-tagline body-base mb-3">
                    Built with care for a better tomorrow.
                </p>
                <p className="footer-copyright body-small text-muted">
                    © {new Date().getFullYear()} The True Table. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
