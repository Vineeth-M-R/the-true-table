import './Approach.css';

function Approach() {
    return (
        <section className="approach section">
            <div className="container">
                <div className="approach-header text-center mb-8 animate-on-scroll">
                    <h2 className="heading-2 mb-4">A trust-first marketplace for clean food</h2>
                    <p className="body-large text-secondary">
                        We're building a platform designed around one idea: <strong>if it's listed here, it's already vetted</strong>.
                    </p>
                </div>

                <div className="approach-grid">
                    <div className="approach-card animate-on-scroll">
                        <div className="approach-number">1</div>
                        <h3 className="heading-4 mb-3">Curated, not crowded</h3>
                        <p className="body-base text-secondary">
                            Only brands that meet clear standards for ingredients, sourcing, and transparency
                            make it onto the platform. No junk. No health-washing.
                        </p>
                    </div>

                    <div className="approach-card animate-on-scroll">
                        <div className="approach-number">2</div>
                        <h3 className="heading-4 mb-3">Built for understanding</h3>
                        <p className="body-base text-secondary">
                            Every product is explained in simple language — what's inside, what's not, and who
                            it's for — so decisions take seconds, not research.
                        </p>
                    </div>

                    <div className="approach-card animate-on-scroll">
                        <div className="approach-number">3</div>
                        <h3 className="heading-4 mb-3">Quick commerce, done right</h3>
                        <p className="body-base text-secondary">
                            Local availability and fast delivery, without compromising on quality or trust.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Approach;
