import { Link } from "react-router-dom"

function RoomsPreview() {
    return (
    <section className="rooms-preview">

        <h2>Rooms</h2>

        <div className="room-cards">

            <Link to="/rooms" className="room-card standard">
                <img
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80"
                  alt="Standard room"
                />
                <h3>Standard</h3>
                <p>Simple, comfortable. Perfect for a good nights sleep.</p>
            </Link>

            <Link to="/rooms" className="room-card deluxe">
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
                  alt="Deluxe room"
                />
                <h3>Deluxe</h3>
                <p>
                    Enjoy our spacious Deluxe Room with a stunning ocean view and a king-size bed. 
                    Includes a complimentary coffee machine and one free room service per day.
                </p>
            </Link>

            <Link to="/rooms" className="room-card luminous">
                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
                  alt="Luminous Suite"
                />
                <h3>Luminous Suite</h3>
                <p>
                    Stay above it all in the Luminous Suite, 
                    a top-floor luxury space with panoramic views of the city and ocean. 
                    Designed with smart room technology, elegant ambient lighting, and all Deluxe amenities, including two complimentary room services per day.
                </p>
            </Link>
        </div>
    </section>
    )
}

export default RoomsPreview