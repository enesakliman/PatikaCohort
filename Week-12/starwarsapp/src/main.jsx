import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StarWarsProvider } from "./context/StarWarsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StarWarsProvider>
    <App />
  </StarWarsProvider>
);
