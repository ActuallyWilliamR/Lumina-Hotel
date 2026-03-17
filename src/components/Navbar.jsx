import { Link } from "react-router-dom"
import {useState, useEffect} from "react"

function Navbar() {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () =>  {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setVisible(false) // scrolling down
      } else {
        setVisible(true) // scrolling up
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY]) 

  return (
    <nav className={`navbar ${visible ? "show" : "hide"}`}>
      <Link to="/" className="logo">
        Lumina Hotel
      </Link>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rooms">Rooms</Link></li>
        <li><Link to="/booking">Booking</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar