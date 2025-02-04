import { createContext, useContext, useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"

const StarWarsContext = createContext()

export const StarWarsProvider = ({ children }) => {
  StarWarsProvider.propTypes = {
    children: PropTypes.node.isRequired,
  }

  // State
  const [ships, setShips] = useState([]) // All ships
  const [searchTerm, setSearchTerm] = useState("") // Search input
  const [searchQuery, setSearchQuery] = useState("") // Search query
  const [filteredShips, setFilteredShips] = useState([]) // Filtered ships
  const [selectedShip, setSelectedShip] = useState(null) // Selected ship
  const navigate = useNavigate() // Navigation

  // Fetch ships
  useEffect(() => {
    const fetchShips = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/starships/")
        const data = await response.json()
        setShips(data.results)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchShips()
  }, [])

  // Filter ships
  useEffect(() => {
    setFilteredShips(
      ships.filter(
        (ship) =>
          ship.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ship.model.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    )
  }, [searchQuery, ships])

  // Handle search input
  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value)
  }

  // Handle search submit
  const handleSearchSubmit = (event) => {
    event.preventDefault()
    setSearchQuery(searchTerm)
  }

  // Select ship
  const selectShip = async (id) => {
    const ship = ships.find((s) => s.url.endsWith(`/${id}/`))
    if (ship) {
      setSelectedShip(ship)
    } else {
      try {
        const response = await fetch(`https://swapi.dev/api/starships/${id}/`)
        const data = await response.json()
        setSelectedShip(data)
      } catch (error) {
        console.error("Error fetching ship details:", error)
      }
    }
    navigate(`/details/${id}`)
  }
  
  // Go back
  const goBack = () => {
    setSelectedShip(null)
    navigate("/")
  }

  // Value
  const value = {
    ships,
    filteredShips,
    searchTerm,
    handleSearchInput,
    handleSearchSubmit,
    selectedShip,
    selectShip,
    goBack,
  }

  return <StarWarsContext.Provider value={value}>{children}</StarWarsContext.Provider>
}



export const useStarWars = () => useContext(StarWarsContext)

