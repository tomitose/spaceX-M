import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// //Otra forma mas simple:

// const root = document.getElementById('root')

// ReactDOM.render(<App />,root)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
