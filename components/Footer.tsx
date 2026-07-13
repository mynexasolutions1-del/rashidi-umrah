import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-about">
            <div className="logo" style={{ marginBottom: "20px" }}>
              <div
                style={{
                  background: "white",
                  borderRadius: "8px",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <img
                  src="/images/logo.jpeg"
                  alt="Rashidi Umrah Logo"
                  style={{ height: "50px", width: "auto", borderRadius: "4px" }}
                />
              </div>
              <div className="logo-text">
                <h1 style={{ color: "white" }}>RASHIDI</h1>
                <span style={{ color: "var(--accent)" }}>Umrah & Hajj</span>
              </div>
            </div>
            <p>Your trusted partner for Umrah, Hajj and Spiritual journeys.</p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/rashidiumrahtourofficial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/packages">Packages</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Packages</h4>
            <ul className="footer-links">
              <li>
                <Link href="/packages">Economy Umrah</Link>
              </li>
              <li>
                <Link href="/packages">Deluxe Umrah</Link>
              </li>
              <li>
                <Link href="/packages">Premium Umrah</Link>
              </li>
              <li>
                <Link href="/packages">Hajj Package</Link>
              </li>
              <li>
                <Link href="/packages">Group Departures</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <i className="fa-solid fa-phone"></i> +91 80947 71024
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i> info@rashidiumrah.com
              </li>
              <li>
                <i className="fa-solid fa-globe"></i> www.rashidiumrah.com
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i> 123, Travel
                Street, Delhi, India
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Rashidi Umrah Tours & Travels. All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
