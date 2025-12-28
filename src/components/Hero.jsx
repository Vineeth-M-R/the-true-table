import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            {/* Hero image with centered container like firstclub.site */}
            <div className="hero-image-section">
                <div className="hero-image-wrapper">
                    <img
                        src="/bg.jpeg"
                        alt="Fresh, healthy food ingredients"
                        className="hero-image-fullwidth"
                    />
                    <div className="hero-image-overlay">
                        <div className="hero-title-wrapper">
                            <h1 className="heading-hero hero-title-overlay fade-in">the true table</h1>
                            <p className="hero-subtitle-overlay">A table for those who care what they eat.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content below the image */}
            <div className="hero-content-section section">
                <div className="container-narrow text-center">
                    <div className="hero-content fade-in">
                        <p className="hero-tagline heading-3 mb-6">
                            Clean food. Zero confusion. Delivered fast.
                        </p>
                        <p className="body-large text-secondary mb-8">
                            The True Table is a health-first quick commerce platform that curates only clean,
                            transparent food brands — so customers don't have to research before they buy.
                        </p>
                        <div className="hero-context mb-8">
                            <span className="badge badge-green">Launching in Hyderabad</span>
                            <span className="text-muted"> · Built for health-conscious consumers</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
