import { useStarWars } from "../context/StarWarsContext"
import shipImg from "../assets/ships.png"

function ShipDetails() {
  const { selectedShip, goBack } = useStarWars()

  if (!selectedShip) {
    return <div>Loading...</div>
  }

  return (
    <div className="container-details">
      <div className="star-card-details">
        <img src={shipImg}/>
        <h3>{selectedShip.name}</h3>
        <p>Model: {selectedShip.model}</p>
        <p>Manufacturer: {selectedShip.manufacturer}</p>
        <p>Hyperdrive rating: {selectedShip.hyperdrive_rating}</p>
        <p>Length: {selectedShip.length}</p>
        <p>Passengers: {selectedShip.passengers}</p>
        <p>Starship class: {selectedShip.starship_class}</p>
      </div>
      <button className="input-submit" onClick={goBack}>
        Geri Dön
      </button>
    </div>
  )
}

export default ShipDetails

