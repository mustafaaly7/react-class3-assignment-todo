import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import UseState from './components/UseState.jsx'
// we use vercel.json file to make our website live 

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <App />
    <App/>
  // </StrictMode>,
)
