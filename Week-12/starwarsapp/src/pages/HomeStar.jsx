import logo from "../assets/starwarslog.png";
import shipImg from "../assets/ships.png";
import { useStarWars } from "../context/StarWarsContext";

function HomeStar() {
  const { filteredShips, handleSearchInput, searchTerm, handleSearchSubmit } =
    useStarWars();

  return (
    <>
      <div className="container">
        <div className="star-header">
          <img src={logo} alt="Star Wars Logo" />
        </div>
        <form className="star-input" onSubmit={handleSearchSubmit}>
          <label htmlFor="search">Name / Model</label>
          <input
            className="input-search"
            type="search"
            placeholder="Name / Model"
            value={searchTerm}
            onChange={handleSearchInput}
          />
          <button className="input-submit" type="submit">
            Filtre
          </button>
        </form>
        <hr />
        <div className="star-list">
          {filteredShips.length > 0 ? (
            filteredShips.map((ship) => (
              <div className="star-card" key={ship.name}>
                <img src={shipImg} alt="Starship" />
                <h3>{ship.name}</h3>
                <p>Model: {ship.model}</p>
                <p>Hyperdrive rating: {ship.hyperdrive_rating}</p>
              </div>
            ))
          ) : (
            <p>No ships found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default HomeStar;
