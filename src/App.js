import React, { useState, useEffect} from "react";
import './App.css';
import Login from "./components/Content";
import NavScrollExample from "./components/Header";

function App() {
  return (
    <div className="App">
      <NavScrollExample/>
      <Login/>
    </div>
  );
}   

export default App;
