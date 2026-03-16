import { Link } from "react-router-dom"

import StandardRoom from "../assets/StandardBG.webp"
import DeluxeRoom from "../assets/DeluxeBG.webp"
import LuminousRoom from "../assets/LuminousBG.webp"


function RoomDescription() {
    return (
        <section className="roomPageContainer">
            <div className="roomDescriptionsContainer">
                <div className="standardRoomDescription">
                    <img src={StandardRoom} alt="Standard Room Image" />

                    <div className="standardRoomDescriptionText">
                        <h2>Standard Room</h2>
                        <p>
                            Our Standard Room offers a comfortable and welcoming space, ideal for both short stays and longer visits.
                            The room is thoughtfully designed to provide a relaxing environment after a day of travel, meetings, or exploring the city.
                            The room features a queen-size bed with premium bedding, ensuring a restful night's sleep.
                            A work desk and chair provide a convenient space for reading or working, while a comfortable seating area allows guests to unwind.
                            Guests can enjoy modern amenities including high-speed Wi-Fi, a flat-screen TV, air conditioning, and complimentary coffee and tea facilities.
                            The room also includes a spacious wardrobe, luggage rack, and a personal safe for valuables.
                            <br/><br/>
                            The private bathroom is equipped with a walk-in shower, fresh towels, a hairdryer, and complimentary toiletries.
                            Large windows provide plenty of natural light and offer views of the surrounding city or hotel courtyard, creating a bright and relaxing atmosphere.
                            Our Standard Room is the perfect choice for guests seeking comfort, functionality, and a pleasant stay at an excellent value.
                        </p>
                    </div>
                </div>

                <div className="deluxeRoomDescription">                    
                    <div className="deluxeRoomDescriptionText">
                        <h2>Deluxe Room</h2>
                        <p>
                            Our Deluxe Room offers an elevated stay with additional space, refined design, and enhanced comfort.
                            The room provides the perfect balance between luxury and functionality for guests seeking a more spacious and relaxing environment.
                            The room features a king-size bed with premium linens, designed to provide exceptional comfort and a restful night's sleep.
                            A comfortable seating area with a lounge chair and small table creates an inviting space for reading, relaxing, or enjoying room service.
                            <br/><br/>
                            Guests can enjoy a range of modern amenities including high-speed Wi-Fi, a large flat-screen TV, air conditioning, and a fully stocked coffee and tea station.
                            The room also includes a dedicated workspace, ideal for light work or planning the day ahead.
                            The private bathroom features a modern walk-in rain shower, plush towels, luxury toiletries, and a hairdryer.
                            Select Deluxe Rooms may also include a soaking bathtub for additional comfort.
                            <br/><br/>
                            Large windows provide abundant natural light and views of the city skyline or surrounding scenery, creating a bright and elegant atmosphere.
                            The Deluxe Room is perfect for guests who appreciate extra space, comfort, and a touch of luxury during their stay.
                        </p>
                    </div>

                    <img src={DeluxeRoom} alt="Deluxe Room Image" />
                </div>
                    
                <div className="luminousRoomDescription">
                    <img src={LuminousRoom} alt="Luminous Room Image" />
                    
                    <div className="luminousRoomDescriptionText">
                        <h2>Luminous Room</h2>
                        <p>
                            The Luminous Suite represents the pinnacle of comfort, sophistication, and productivity. Designed for professionals who expect both luxury and functionality.
                            The suite features a separate bedroom with a king-size bed and premium bedding, ensuring a peaceful and restorative sleep.
                            The spacious living area provides a refined environment for relaxation, informal meetings, or quiet work sessions.
                            <br/><br/>
                            A highlight of the Luminous Suite is its dedicated executive workspace, equipped with a large ergonomic desk, comfortable office chair, and high-speed fiber internet connection.
                            Multiple charging points and excellent lighting make the space ideal for extended work sessions or remote meetings.
                            Guests can enjoy a range of premium amenities including a large smart TV, climate control, complimentary high-speed Wi-Fi, and a curated coffee and tea station.
                            The suite also features a private lounge area, perfect for unwinding after a productive day.
                            <br/><br/>
                            The elegant bathroom includes a walk-in rain shower, deep soaking bathtub, luxury toiletries, plush towels, and a spacious vanity area.
                            Floor-to-ceiling windows fill the suite with natural light and provide panoramic views, creating a calm and inspiring atmosphere for both work and relaxation.
                            The Luminous Suite is designed for guests who want to work efficiently, relax comfortably, and experience the highest level of hospitality during their stay.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RoomDescription