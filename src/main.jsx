import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {BrowserRouter, Route,  Routes} from "react-router-dom";

import LogIn from "./pages/LogIn.jsx";
import Users from "./pages/Users.jsx";
import App from "./App.jsx";
import AuthMiddleware from "./middlewere/authMiddleware.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <AuthMiddleware>
              <Routes>
                  <Route path="/user" element={<Users/>}/>
              </Routes>
          </AuthMiddleware>
          <Routes>
              <Route path="/" element={<App/>}/>
              <Route path="/login" element={<LogIn/>}/>
          </Routes>

      </BrowserRouter>
  </React.StrictMode>,
)
