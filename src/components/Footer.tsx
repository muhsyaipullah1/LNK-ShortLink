'use client';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <svg style={{ width: '24px', height: '24px', color: 'var(--text-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                    </div>
                    <span className="footer-text">© 2024 LNK - ShortLink. By SyaLink.com</span>
                </div>
                <div className="footer-links">
                    <a href="/privacy">Privacy</a>
                    <a href="/terms">Terms</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </footer>
    );
}
