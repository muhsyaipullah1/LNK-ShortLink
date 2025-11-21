'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Navigation */}
            <Navbar />

            {/* Content */}
            <div className="hero-section" style={{ flex: 1 }}>
                <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--text-primary)' }}>
                        Privacy Policy
                    </h1>

                    <div className="main-card" style={{ textAlign: 'left', background: '#111111', color: '#f3f4f6', borderColor: '#1f1f1f' }}>
                        <div style={{ lineHeight: 1.8 }}>
                            <p style={{ marginBottom: '1.5rem' }}>
                                <strong>Last updated:</strong> November 21, 2024
                            </p>

                            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>
                                1. Information We Collect
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                When you use LNK - ShortLink, we collect the following information:
                            </p>
                            <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                                <li>Original URLs that you submit for shortening</li>
                                <li>Generated short codes and their creation timestamps</li>
                                <li>Click statistics for each shortened link</li>
                                <li>Basic usage data to improve our service</li>
                            </ul>

                            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>
                                2. How We Use Your Information
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                We use the collected information to:
                            </p>
                            <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                                <li>Provide and maintain our URL shortening service</li>
                                <li>Track click statistics for your shortened links</li>
                                <li>Improve and optimize our service performance</li>
                                <li>Prevent abuse and ensure service security</li>
                            </ul>

                            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>
                                3. Data Storage
                            </h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Your data is securely stored in our database powered by Supabase. We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure.
                            </p>

                            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>
                                4. Data Sharing
                            </h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                We do not sell, trade, or rent your personal information to third parties. Your shortened links and their statistics are private and only accessible to you.
                            </p>

                            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>
                                5. Cookies
                            </h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                We use essential cookies to ensure the proper functioning of our service. These cookies do not track your personal information.
                            </p>

                            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>
                                6. Your Rights
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                You have the right to:
                            </p>
                            <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                                <li>Access your data</li>
                                <li>Request data deletion</li>
                                <li>Opt-out of data collection</li>
                            </ul>

                            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>
                                7. Contact Us
                            </h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                If you have any questions about this Privacy Policy, please contact us through our <a href="/contact" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>Contact page</a>.
                            </p>

                            <p style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
                                By using LNK - ShortLink, you agree to this Privacy Policy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
