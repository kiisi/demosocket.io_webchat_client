import React from 'react'
import Navbar from '../../components/major/Navbar/Navbar'
import Experts from './Experts/Experts'
import Hero from './Hero/Hero'
import Papersowl from './Papersowl/Papersowl'
import Ratings from './Ratings/Ratings'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Ratings />
      <Papersowl />
      <Experts />
    </>
  )
}

export default Home