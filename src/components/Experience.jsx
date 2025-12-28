import './Experience.css';

function Experience() {
    return (
        <section className="experience section">
            <div className="container">
                <div className="experience-header text-center mb-8 animate-on-scroll">
                    <h2 className="heading-2 mb-4">How the experience looks</h2>
                    <p className="body-large text-secondary">Conceptual preview of the platform</p>
                </div>

                <div className="experience-grid">
                    {/* Brand Discovery Card */}
                    <div className="experience-item card animate-on-scroll">
                        <div className="experience-label mb-4">
                            <span className="badge">Brand Discovery Card</span>
                        </div>
                        <div className="brand-logo-placeholder mb-4">🌿</div>
                        <h4 className="heading-4 mb-3">Why this brand exists</h4>
                        <p className="body-base text-secondary mb-4">
                            A short, honest explanation of the brand's philosophy and what it stands for.
                        </p>
                        <div className="trust-badges">
                            <span className="badge badge-green">Clean Label</span>
                            <span className="badge badge-green">No Refined Sugar</span>
                            <span className="badge badge-green">Transparent Ingredients</span>
                        </div>
                    </div>

                    {/* Product Page */}
                    <div className="experience-item card animate-on-scroll">
                        <div className="experience-label mb-4">
                            <span className="badge">Product Page</span>
                        </div>
                        <h4 className="heading-4 mb-3">Product Name</h4>
                        <p className="body-base text-secondary mb-4">
                            Short description in plain English
                        </p>
                        <div className="product-details">
                            <div className="detail-section mb-3">
                                <strong className="body-small">What's inside</strong>
                                <p className="body-small text-secondary">Key ingredients explained simply</p>
                            </div>
                            <div className="detail-section mb-3">
                                <strong className="body-small">What's not</strong>
                                <p className="body-small text-secondary">
                                    No artificial sweeteners · No preservatives · No fillers
                                </p>
                            </div>
                            <div className="detail-section">
                                <strong className="body-small">Best for</strong>
                                <p className="body-small text-secondary">
                                    Breakfast · Kids · Fitness · Everyday snacking
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Smart Baskets */}
                    <div className="experience-item card animate-on-scroll">
                        <div className="experience-label mb-4">
                            <span className="badge">Smart Baskets</span>
                        </div>
                        <div className="basket-example mb-4">
                            <h4 className="heading-4 mb-2">Clean Breakfast Basket</h4>
                            <p className="body-small text-muted">Bars · Nut butters · Oats</p>
                        </div>
                        <div className="basket-example mb-4">
                            <h4 className="heading-4 mb-2">Post-Workout Snacks</h4>
                            <p className="body-small text-muted">High-protein · Low sugar</p>
                        </div>
                        <p className="body-base text-secondary mt-4">
                            Designed to help customers build healthy routines, not one-off purchases.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
