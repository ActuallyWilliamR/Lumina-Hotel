import { Link } from "react-router-dom"

import StandardRoom from "../assets/StandardBG.webp"
import DeluxeRoom from "../assets/DeluxeBG.webp"
import LuminousRoom from "../assets/LuminousBG.webp"

function RoomsPreview() {
    return (
    <section className="rooms-preview">

        <h2>Rooms</h2>

        <div className="room-cards">

            <Link to="/rooms" className="room-card standard">
                <img src={StandardRoom} alt="Standard Room Image" />
                <h3>Standard</h3>
                <p>Simple, comfortable. Perfect for a good nights sleep.</p>
            </Link>

            <Link to="/rooms" className="room-card deluxe">
                <img src={DeluxeRoom} alt="Deluxe Room Image" />
                <h3>Deluxe</h3>
                <p>
                    Enjoy our spacious Deluxe Room with a stunning ocean view and a king-size bed. 
                    Includes a complimentary coffee machine and one free room service per day.
                </p>
            </Link>

            <Link to="/rooms" className="room-card luminous">
                <img src={LuminousRoom} alt="Luminous Room Image" />
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