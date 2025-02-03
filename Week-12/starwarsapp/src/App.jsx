import { useStarWars } from "./context/StarWarsContext";
import HomeStar from "./pages/HomeStar";

import "./App.css";

function App() {
  const { ships } = useStarWars();

  return (
    <>
      <HomeStar />
    </>
  );
}

export default App;
