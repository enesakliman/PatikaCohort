import { Routes, Route } from "react-router-dom"
import HomeStar from "./pages/HomeStar"
import ShipDetails from "./pages/ShipDetails"

import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeStar />} />
      <Route path="/details/:id" element={<ShipDetails />} />
    </Routes>
  )
}

export default App

