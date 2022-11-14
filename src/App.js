import React from 'react'
import Home from './Pages/Home/Home'
import './App.scss'
import Footer from './components/major/Footer/Footer'
import Fab from './components/minor/Button/Fab/Fab'
const App = () => {
  return (
    <div className="app">
      <Home/>
      <Footer/>
      <Fab/>
    </div>
  )
}

export default App
