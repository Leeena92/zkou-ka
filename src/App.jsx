import React from 'react'
import Navbar from './Components/Navbar/'
import Hero from './Components/Hero/Hero'
import Products from './Components/Products'
import { ReactDOM } from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Pages/Home'
import Abouth from './Components/Abouth'
import Contact from './Components/Contact'




const App = () => {
 
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={Abouth} />
    <Route path="/pizzas" component={Products} />
    <Route path="/contact" component={Contact} />
  </Router>
  
  return (
    <>
    
    <Navbar/>
    <Hero/>
    <Products/>
    

    </>
  )
}


export default App
