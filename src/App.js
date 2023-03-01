import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserContext } from './UserContext'
import Home from './components/home/Home'
import Chat from './components/chat/Chat'
import Navbar from './components/layout/Navbar'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
const App = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await fetch('http://localhost:5000/verifyuser', {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          }
        })
        const data = await res.json()
        setUser(data)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }

    verifyUser()

  }, [])
  

  return (
    <Router>
      <div className="app">
        <UserContext.Provider value={{ user, setUser }}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/chat/:room_id/:room_name" element={<Chat />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  )
}

export default App
