import { useState } from "react"

function Booking() {

  const [name, setName] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [roomType, setRoomType] = useState("Standard")
  const [bookingConfirmed, setBookingConfirmed] = useState(false)  

  const handleSubmit = (e) =>  {
    e.preventDefault()

    if (checkOut < checkIn) {
      alert("Check-out date must be after Check-in date.")
      return
    }

    const booking = {
      name,
      checkIn,
      checkOut,
      roomType
    }

    localStorage.setItem("booking", JSON.stringify(booking))
    setBookingConfirmed(true)
  }

  return (
    <section className="booking-section">
      <div className="booking-container">

        <h1>Book Your Stay</h1>

        {bookingConfirmed ? (
          <p className="booking-confirmation">Booking Confirmed!</p>
        ) : (
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              required
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="date-row">
            <div className="date-card">
              <label htmlFor="checkIn">Check-In</label>
              <input
                required
                type="date"
                id="checkIn"
                value={checkIn} 
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>

            <div className="date-card">
              <label htmlFor="checkOut">Check-Out</label>
              <input
                required
                type="date"
                id="checkOut"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="roomType">Room Type</label>
            <select
            id="roomType"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            >
              <option value="Standard">Standard</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Suite">Suite</option>
            </select>
          </div>

          <button type="submit" className="booking-button">Book</button>
        </form>
        )}
      </div>
      
    </section>
  )
}

export default Booking