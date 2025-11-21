'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Navigation */}
            <Navbar />

            {/* Content */}
            <div className="hero-section" style={{ flex: 1 }}>
                <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--text-primary)' }}>
                        Terms of Service
                    </h1>

                    <div className="main-card" style={{ textAlign: 'left', background: '#111111', color: '#f3f4f6', borderColor: '#1f1f1f' }}>
                        <div style={{ lineHeight: 1.8 }}>
                            <p style={{ marginBottom: '1.5rem' }}>
                                <strong>Last updated:</strong> November 21, 2024
                            </p>

                            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>
                                1. Acceptance of Terms
                            </h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                By accessing and using LNK - ShortLink ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Service.
                            </p>

                            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>
                                2. Description of Service
                            </h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                LNK - ShortLink provides a free URL shortening service that allows users to transform long URLs into short, manageable links. We also provide click tracking statistics for the shortened links.
                            </p>

                            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>
                                3. User Conduct
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                You agree not to use the Service for any unlawful purpose or in any way that could damage, disable, overburden, or impair the Service. Specifically, you agree NOT to use the Service to shorten links to:
                            </p>
                            <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                                <li>Malware, viruses, or phishing sites</li>
                                <li>Spam or unsolicited commercial email</li>
                                <li>Illegal content or content that promotes illegal activities</li>
                                <li>Hate speech, harassment, or sexually explicit material</li>
                            </ul>
                            <p style={{ marginBottom: '1.5rem' }}>
                                We reserve the right to disable any link that violates these terms without prior notice.
                            </p>

                            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>
                                4. Intellectual Property
                            </h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                The Service and its original content, features, and functionality are owned by LNK - ShortLink and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                            </p>

                            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>
                                5. Disclaimer of Warranties
                            </h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                The Service is provided on an "AS IS" and "AS AVAILABLE" basis. LNK - ShortLink makes no representations or warranties of any kind, express or implied, as to the operation of the Service or the information, content, materials, or products included on the Service.
                            </p>

                            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>
                                6. Limitation of Liability
                            </h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                In no event shall LNK - ShortLink, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                            </p>

                            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>
                                7. Changes to Terms
                            </h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
                            </p>

                            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>
                                8. Contact Us
                            </h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                If you have any questions about these Terms, please contact us through our <a href="/contact" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>Contact page</a>.
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
