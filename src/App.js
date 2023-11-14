import React from 'react'
import Navbar from "./Navbar";
import Hero from "./Hero";
import Table from './Table';
import "./App.css";
function App() {
  return (
    <div id="root">
      <Navbar/>
      <Hero/>
      <Table/>
    </div>
  )
}

export default App