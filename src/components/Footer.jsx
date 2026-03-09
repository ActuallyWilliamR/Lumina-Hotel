import { Link } from "react-router-dom"
import logo200 from "../assets/LuminaHotelLogo-200px.webp"
import logo400 from "../assets/LuminaHotelLogo-400px.webp"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-contact">
          <p className="bold">Address:</p>
          <p>Fantasy Street, Los Angeles</p>
          <p className="bold">Phone:</p>
          <p>+1 213-555-0123</p>
          <p className="bold">Mail:</p>
          <a className="mail" href="mailto:support@LuminaHotel.com">support@LuminaHotel.com</a>
        </div>

        <div className="footer-logo">
          <img 
            src={logo200}
            srcSet={`${logo400} 2x`}
            alt="Lumina Hotel logo"
            loading="lazy"
          />
        </div>

        <nav className="footer-links">
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact us</Link>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2026 Lumina Hotel. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer