import { createRoot } from 'react-dom/client'
import { BillProvider } from './context/BillContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <BillProvider>
        <App />
    </BillProvider>
)
