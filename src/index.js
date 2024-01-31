import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ThemeProvider from './utils/ThemeContext'

import { store } from './app/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <ThemeProvider>
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </React.StrictMode>
  </Provider>
)
