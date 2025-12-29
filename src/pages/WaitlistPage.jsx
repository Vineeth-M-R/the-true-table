import { useState } from 'react';
import { supabase } from '../supabaseClient';
import './WaitlistPage.css';

function WaitlistPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (error) setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Insert data into Supabase
            const { error: supabaseError } = await supabase
                .from('waitlist')
                .insert({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone
                });

            if (supabaseError) {
                throw supabaseError;
            }


            setSubmitted(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                setFormData({ name: '', email: '', phone: '' });
                setSubmitted(false);
            }, 3000);
        } catch (err) {

            setError(err.message || 'Failed to submit. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="waitlist-page">
            <div className="waitlist-container">
                <div className="waitlist-content animate-on-scroll">
                    <h1 className="waitlist-title">Join Our Waitlist</h1>
                    <p className="waitlist-subtitle">
                        Be the first to experience The True Table. Sign up now and get early access to our platform.
                    </p>

                    {!submitted ? (
                        <form className="waitlist-form" onSubmit={handleSubmit}>
                            {error && (
                                <div className="error-message">
                                    <span className="error-icon">⚠</span>
                                    <p>{error}</p>
                                </div>
                            )}

                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <button type="submit" className="submit-btn" disabled={loading}>
                                {loading ? 'Submitting...' : 'Join Waitlist'}
                            </button>
                        </form>
                    ) : (
                        <div className="success-message">
                            <div className="success-icon">✓</div>
                            <h2>Thank You!</h2>
                            <p>You've been added to our waitlist. We'll be in touch soon.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default WaitlistPage;
