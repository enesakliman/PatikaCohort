import "./App.css";
import { useNote } from "./context/NoteContext";

function App() {
  const { handleAddNote, handleChange, handleColorChange, note, color, colors } =
    useNote();
  return (
    <>
      <div className="notes-app-container">
        <div className="notes-input-container">
          <h1>NotesApp</h1>
          <input className="search" type="search" placeholder="Search" />
          <div className="notes-input">
            <textarea
              onChange={handleChange}
              name="notes-input"
              rows={17}
              cols={10}
              placeholder="Enter your note here..."
              value={note}
                  
            ></textarea>
            <div className="notes-input-footer">
              <div className="colors-input">
              {colors.map((clr) => (
                <label key={clr.hex} className="color-label" style={{ backgroundColor: clr.hex }}>
                  <input
                    type="radio"
                    name="color"
                    value={clr.name}
                    onChange={handleColorChange}
                    checked={color === clr.name} 
                  />
                  <span className="checkmark">✔</span>
                </label>
              ))}
            </div>
   
              <button onClick={handleAddNote}>Add</button>
            </div>
          </div>
        </div>
        <div className="notes-container">Notes</div>
      </div>
    </>
  );
}

export default App;
