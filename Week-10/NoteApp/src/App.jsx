import "./App.css";

function App() {
  return (
    <>
      <div className="notes-app-container">
        <div className="notes-input-container">
          <h1>NotesApp</h1>
          <input className="search" type="search" placeholder="Search" />
          <div className="notes-input">
            <textarea name="notes-input" rows={17} cols={10} placeholder="Enter your note here..."></textarea>
            <div className="notes-input-footer">
              <div className="colors-input">
                <label className="color-label" style={{ backgroundColor: "#f36795" }}>
                  <input type="radio" name="color" value="pink" />
                  <span className="checkmark">✔</span>
                </label>
                <label className="color-label" style={{ backgroundColor: "#ba68c8" }}>
                  <input type="radio" name="color" value="purple" />
                  <span className="checkmark">✔</span>
                </label>
                <label className="color-label" style={{ backgroundColor: "#ffd44f" }}>
                  <input type="radio" name="color" value="yellow" />
                  <span className="checkmark">✔</span>
                </label>
                <label className="color-label" style={{ backgroundColor: "#56c4f4" }}>
                  <input type="radio" name="color" value="blue" />
                  <span className="checkmark">✔</span>
                </label>
                <label className="color-label" style={{ backgroundColor: "#aed581" }}>
                  <input type="radio" name="color" value="green" />
                  <span className="checkmark">✔</span>
                </label>
              </div>
              <button>Add</button>
            </div>
          </div>
        </div>
        <div className="notes-container">Notes</div>
      </div>
    </>
  );
}

export default App;
