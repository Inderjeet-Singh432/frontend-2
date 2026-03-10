// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-auto">
      <div className="container">
        <div className="row">

          {/* Column 1 - Logo / About */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="fw-bold mb-3">MSB</h5>
            <p className="text-white-75">
              Your short description or tagline here.
              Building better experiences since 2025.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white-75 text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white-75 text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="text-white-75 text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact / Social */}
          <div className="col-lg-4">
            <h5 className="fw-bold mb-3">Get in Touch</h5>
            <p className="text-white-75">Ludhiana, Punjab, India</p>
            <p className="text-white-75">Email: hello@msb.com</p>

            {/* Social icons - using bootstrap-icons since you have it */}
            <div className="mt-3">
              <a href="#" className="text-white-75 me-3 fs-4"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white-75 me-3 fs-4"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white-75 me-3 fs-4"><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="text-white-75 fs-4"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

        </div>

        <hr className="my-4 opacity-25" />

        <div className="text-center text-white-50 small">
          © {new Date().getFullYear()} MSB — All rights reserved.
        </div>
      </div>
    </footer>
  );
}