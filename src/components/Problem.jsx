import './Problem.css';

function Problem() {
    return (
        <section className="problem section">
            <div className="container">
                <div className="problem-content animate-on-scroll">
                    <h2 className="heading-2 mb-6 text-center">Health food today is broken</h2>
                    <p className="body-large text-secondary text-center mb-12">
                        Consumers want to eat better — but the system makes it harder than it should be.
                    </p>

                    <div className="problem-cards">
                        <div className="problem-card">
                            <div className="problem-card-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#c28305" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 17L12 22L22 17" stroke="#c28305" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 12L12 17L22 12" stroke="#c28305" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="problem-card-title">Eroded Trust</h3>
                            <p className="problem-card-text">
                                Misleading labels and vague claims have eroded trust
                            </p>
                        </div>

                        <div className="problem-card">
                            <div className="problem-card-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11" cy="11" r="8" stroke="#c28305" strokeWidth="2" />
                                    <path d="M21 21L16.65 16.65" stroke="#c28305" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h3 className="problem-card-title">Lost in Clutter</h3>
                            <p className="problem-card-text">
                                Truly clean brands are lost in cluttered marketplaces
                            </p>
                        </div>

                        <div className="problem-card">
                            <div className="problem-card-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#c28305" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14 2V8H20" stroke="#c28305" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16 13H8" stroke="#c28305" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16 17H8" stroke="#c28305" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 9H9H8" stroke="#c28305" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="problem-card-title">Research Fatigue</h3>
                            <p className="problem-card-text">
                                Customers are forced to research ingredients before every purchase
                            </p>
                        </div>
                    </div>

                    <div className="problem-conclusion">
                        <p className="body-large text-center">
                            <strong>Bottom line:</strong> Health-conscious users don't want more options.
                            They want <span className="text-accent">clarity and confidence</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Problem;
