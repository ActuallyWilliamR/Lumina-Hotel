import Hero from "../components/Hero"

function Home() {
  return (
    <>
      <Hero />
  
      <section>
        <h2>Travel Light</h2>
        <p>
          Lumina Hotel is designed for modern travelers and tech enthusiasts. 
          Enjoy high-speed connectivity, smart rooms, and comfortable workspaces 
          — the perfect environment for developers, creators, and remote professionals.
        </p>
      </section>

      <section>
        <h2>Our Rooms</h2>

        <div>
          <h3>Standard Room</h3>
          <p>DESCRIPTION</p>
        </div>

        <div>
          <h3>Deluxe Room</h3>
          <p>DESCRIPTION</p>
        </div>

        <div>
          <h3>Luminous Suite</h3>
          <p>DESCRIPTIION</p>
        </div>
      </section>

    </>
  
  )
}

export default Home