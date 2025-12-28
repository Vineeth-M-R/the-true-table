import './Partnership.css';

function Partnership() {
    return (
        <section className="partnership section">
            <div className="container-narrow">
                <div className="partnership-content animate-on-scroll">
                    <h2 className="heading-2 mb-6 text-center">Built to help clean brands win</h2>

                    <ul className="partnership-benefits">
                        <li className="benefit-item">
                            <div className="benefit-icon">🎯</div>
                            <p className="body-base">Reach high-intent, health-first users</p>
                        </li>
                        <li className="benefit-item">
                            <div className="benefit-icon">✨</div>
                            <p className="body-base">Stand out without shouting or discounting</p>
                        </li>
                        <li className="benefit-item">
                            <div className="benefit-icon">📖</div>
                            <p className="body-base">Tell your brand story at the moment of decision</p>
                        </li>
                        <li className="benefit-item">
                            <div className="benefit-icon">📊</div>
                            <p className="body-base">Get city-level insights on repeat behaviour and SKU performance</p>
                        </li>
                    </ul>

                    <div className="positioning-note">
                        <p className="body-base">
                            <strong>Positioning note:</strong> This is not a discount-led marketplace.
                            It's a <span className="text-accent">premium discovery and trust channel</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partnership;
