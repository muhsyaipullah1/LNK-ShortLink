'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setShortUrl('');

    try {
      const response = await fetch('/api/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create short link');
      }

      setShortUrl(data.shortUrl);
      setUrl('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-title">
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            Shorten your links, <br />
            <span className="gradient-text">amplify your reach</span>
          </h1>
          <p className="hero-subtitle" style={{ color: 'var(--text-secondary)' }}>
            Create powerful short links in seconds. Simple, fast, and completely free.
          </p>
        </div>

        {/* Main Input Card */}
        <div className="main-card-container">
          <div className="main-card">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="url" className="form-label" style={{ color: 'var(--text-secondary)' }}>
                  Paste your long URL
                </label>
                <input
                  type="url"
                  id="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com/very-long-url..."
                  className="url-input"
                  required
                  disabled={loading}
                />
              </div>

              {error && (
                <div className="error-box fade-in">
                  <svg style={{ width: '20px', height: '20px', color: '#ef4444' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="error-text">{error}</span>
                </div>
              )}

              {shortUrl && (
                <div className="success-box fade-in">
                  <div className="success-header">
                    <svg style={{ width: '20px', height: '20px', color: 'var(--accent-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="success-message" style={{ color: 'var(--text-secondary)' }}>Link shortened successfully!</span>
                  </div>
                  <div className="result-container">
                    <div className="result-url">
                      <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="short-url">
                        {shortUrl}
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(shortUrl)}
                      className="btn-copy"
                    >
                      {copied ? (
                        <>
                          <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Copied!
                        </>
                      ) : (
                        <>
                          <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                          </svg>
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !url}
                className="btn-primary"
              >
                {loading ? (
                  <>
                    <div className="spinner"></div>
                    Shortening...
                  </>
                ) : (
                  <>
                    Shorten URL
                    <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg style={{ width: '24px', height: '24px', color: 'var(--accent-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="feature-title">Lightning Fast</h3>
            <p className="feature-description">Create short links in milliseconds with our optimized infrastructure.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg style={{ width: '24px', height: '24px', color: 'var(--accent-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="feature-title">Secure & Reliable</h3>
            <p className="feature-description">Your links are safe with enterprise-grade security and 99.9% uptime.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg style={{ width: '24px', height: '24px', color: 'var(--accent-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
            <h3 className="feature-title">Easy to Share</h3>
            <p className="feature-description">Share your shortened links anywhere - social media, emails, or messages.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
