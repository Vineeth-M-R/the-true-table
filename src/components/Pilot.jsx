import './Pilot.css';

function Pilot() {
    return (
        <section className="pilot section">
            <div className="container-narrow">
                <div className="pilot-content animate-on-scroll">
                    <h2 className="heading-2 mb-4 text-center">Start small. Learn fast.</h2>
                    <p className="body-large text-secondary text-center mb-8">
                        We're launching city-by-city with a small group of founding partners.
                    </p>

                    <div className="pilot-details">
                        <h3 className="heading-4 mb-4">Early pilots include:</h3>
                        <ul className="pilot-list">
                            <li>
                                <span className="pilot-bullet">•</span>
                                <span>Hyderabad-only launch</span>
                            </li>
                            <li>
                                <span className="pilot-bullet">•</span>
                                <span>Limited, curated assortment</span>
                            </li>
                            <li>
                                <span className="pilot-bullet">•</span>
                                <span>Short pilot window (30–60 days)</span>
                            </li>
                            <li>
                                <span className="pilot-bullet">•</span>
                                <span>Success metrics focused on repeat rate, basket attach, and qualitative feedback</span>
                            </li>
                        </ul>
                    </div>

                    <div className="pilot-goal">
                        <p className="body-base">
                            The goal is to validate demand and experience before scaling.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pilot;
