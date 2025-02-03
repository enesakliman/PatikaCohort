import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const StarWarsContext = createContext();

export const StarWarsProvider = ({ children }) => {
  StarWarsProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const [ships, setShips] = useState([]); // API'den gelen gemiler
  const [searchTerm, setSearchTerm] = useState(""); // Kullanıcının inputa yazdığı kelime
  const [searchQuery, setSearchQuery] = useState(""); // Butona basınca yapılacak arama
  const [filteredShips, setFilteredShips] = useState([]); // Filtrelenmiş gemiler

  // API'den gemileri çek
  useEffect(() => {
    const fetchShips = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/starships/");
        const data = await response.json();
        setShips(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchShips();
  }, []);

    // Gemileri filtrele
  useEffect(() => {
    setFilteredShips(
      ships.filter(
        (ship) =>
          ship.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ship.model.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, ships]);


  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(searchTerm);
  };

  






  const data = {
    filteredShips,
    searchTerm,
    handleSearchInput,
    handleSearchSubmit,
  };

  return (
    <StarWarsContext.Provider value={data}>{children}</StarWarsContext.Provider>
  );
};

export const useStarWars = () => useContext(StarWarsContext);
