import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo">
        Lumina Hotel
      </Link>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rooms">Rooms</Link></li>
        <li><Link to="/booking">Booking</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar