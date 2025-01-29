import './App.css'

function App() {


  return (
    <>
      <div className='notes-app-container'>
        <div>
          <h1>NotesApp</h1>
          <input type="search" placeholder='Search'/>
          <div>
            <textarea name="notes-input" id=""></textarea>
            <div className='colors-input'>
              <input type="checkbox" name="pink" id="pink" />
              <input type="checkbox" name="purple" id="purple" />
              <input type="checkbox" name="yellow" id="yellow" />
              <input type="checkbox" name="blue" id="blue" />
              <input type="checkbox" name="green" id="green" />
            </div>
            <button>Add</button>
          </div>
        </div>
        <div className='notes-container'>
          Notes
        </div>
      </div>
    </>
  )
}

export default App
