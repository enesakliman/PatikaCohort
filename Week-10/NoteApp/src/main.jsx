import { createRoot } from 'react-dom/client'
import { NoteProvider } from './context/NoteContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <NoteProvider>
        <App />
    </NoteProvider>
)
