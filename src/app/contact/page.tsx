'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Navigation */}
            <Navbar />

            {/* Content */}
            <div className="hero-section" style={{ flex: 1 }}>
                <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--text-primary)' }}>
                        Contact Us
                    </h1>

                    <div className="main-card" style={{ textAlign: 'left', background: '#111111', color: '#f3f4f6', borderColor: '#1f1f1f' }}>
                        <div style={{ lineHeight: 1.8 }}>
                            <p style={{ marginBottom: '2rem', fontSize: '1.125rem', color: '#f3f4f6' }}>
                                Have questions, suggestions, or need assistance? We're here to help! Reach out to us using the information below.
                            </p>

                            <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', marginBottom: '3rem' }}>
                                <div style={{ background: '#1a1a1a', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #2a2a2a' }}>
                                    <div style={{ width: '40px', height: '40px', background: 'rgba(62, 207, 142, 0.15)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                        <svg style={{ width: '20px', height: '20px', color: '#3ecf8e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: '#f3f4f6' }}>Email Us</h3>
                                    <p style={{ marginBottom: '1rem', opacity: 0.8, color: '#9ca3af' }}>For general inquiries and support</p>
                                    <a href="mailto:support@syalink.com" style={{ color: '#3ecf8e', textDecoration: 'none', fontWeight: 500 }}>support@syalink.com</a>
                                </div>

                                <div style={{ background: '#1a1a1a', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #2a2a2a' }}>
                                    <div style={{ width: '40px', height: '40px', background: 'rgba(62, 207, 142, 0.15)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                        <svg style={{ width: '20px', height: '20px', color: '#3ecf8e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: '#f3f4f6' }}>Social Media</h3>
                                    <p style={{ marginBottom: '1rem', opacity: 0.8, color: '#9ca3af' }}>Follow us for updates</p>
                                    <a href="#" style={{ color: '#3ecf8e', textDecoration: 'none', fontWeight: 500 }}>@LNKShortLink</a>
                                </div>
                            </div>

                            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#f3f4f6' }}>
                                Report Abuse
                            </h2>
                            <p style={{ marginBottom: '1.5rem', color: '#f3f4f6' }}>
                                If you encounter a link that violates our Terms of Service (e.g., spam, phishing, malware), please report it immediately to <a href="mailto:abuse@syalink.com" style={{ color: '#3ecf8e', textDecoration: 'none' }}>abuse@syalink.com</a>. We take abuse reports seriously and will investigate promptly.
                            </p>

                            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#f3f4f6' }}>
                                Response Time
                            </h2>
                            <p style={{ color: '#f3f4f6' }}>
                                We aim to respond to all inquiries within 24-48 hours during business days.
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
