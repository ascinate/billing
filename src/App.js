import React, { useState, useEffect } from "react";
import { ReactDOM , render } from "react";
import {BrowserRouter as Router , Routes, Route, Outlet,Switch, useLocation} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import AccountSettings from "./Pages/AccountSettings";
import './App.css';


function App() {
  return (
    <div className="App" >
        <Router>
              <Routes>
              
                  <Route excaexact="true" path="/" element={<AccountSettings/>}/>
                  
              </Routes>
            
        </Router>
    </div>
  );
}

export default App;
