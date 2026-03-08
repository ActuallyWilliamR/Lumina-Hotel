import { Link } from "react-router-dom"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-kicker">Luxury • Comfort • Simplicity</p>
        <h1>Lumina Hotel</h1>
        <p className="hero-text">Modern comfort for modern travelers.</p>
        <Link to="/booking" className="hero-button">Book Your Stay</Link>
      </div>
    </section>
  )
}

export default Hero