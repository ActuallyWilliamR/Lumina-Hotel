import { useState } from "react"

function Booking() {

  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [roomType, setRoomType] = useState("Standard")
  const [bookingConfirmed, setBookingConfirmed] = useState(false)  

  const handleSubmit = (e) =>  {
    e.preventDefault()

    const booking = {
      name,
      date,
      roomType
    }

    localStorage.setItem("booking", JSON.stringify(booking))
    setBookingConfirmed(true)
  }

  return (
    <section>
      <h1>Book Your Stay</h1>

      {bookingConfirmed ? (
        <p>Booking Confirmed!</p>
      ) : (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
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

        <button type="submit">Book</button>
      </form>
      )}
    </section>
  )
}

export default Booking