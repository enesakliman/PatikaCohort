import "./App.css";
import { useNote } from "./context/NoteContext";

function App() {
  // useNote hook kullanıldı ve gerekli fonksiyonlar ve state'ler alındı.
  const {
    handleAddNote,
    handleChange,
    handleColorChange,
    notes,
    note,
    color,
    colors,
    setSelectedNote,
    filteredNotes,
    setSearch,
    search,
  } = useNote();


  return (
    // Notlar ve notlar için renklerin olduğu container
    <div className="notes-app-container">

      <div className="notes-input-container">
        <h1>NotesApp</h1>
        {/* Arama alanı */}
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="search"
          type="search"
          placeholder="Search"
        />
        {/* Girdi alanı */}
        <div className="notes-input">
          <textarea
            onChange={handleChange}
            name="notes-input"
            rows={17}
            cols={10}
            placeholder="Enter your note here..."
            value={note}
          ></textarea>
          {/* Renk seçim alanı ve not ekleme butonu */}
          <div className="notes-input-footer">
            <div className="colors-input">
              {colors.map((clr) => (
                <label
                  key={clr.hex}
                  className="color-label"
                  style={{ backgroundColor: clr.hex }}
                >
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
            {/* Not ekleme butonu */}
            <button onClick={handleAddNote}>Add</button>
          </div>
        </div>
      </div>
      <div className="notes-container">
        <div className="notes-color-container">
          {/* Arama girdisi olursa sonuçları göster yoksa tüm notları göster */}
          {search === ""
            ? notes.map((note, index) => (
                <div
                  key={index}
                  className="note"
                  style={{
                    backgroundColor: colors.find(
                      (clr) => clr.name === note.color
                    ).hex,
                  }}
                >
                  <p onClick={() => setSelectedNote(note)}>{`Note ${
                    index + 1
                  }`}</p>
                </div>
              ))
            : filteredNotes.map((note, index) => (
                <div
                  key={index}
                  className="note"
                  style={{
                    backgroundColor: colors.find(
                      (clr) => clr.name === note.color
                    ).hex,
                  }}
                >
                  <p onClick={() => setSelectedNote(note)}>{`Note ${
                    index + 1
                  }`}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default App;
