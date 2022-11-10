import React from 'react'
import Navbar from '../../components/major/Navbar/Navbar'
import Experts from './Experts/Experts'
import Faqs from './Faqs/Faqs'
import Feedback from './Feedback/Feedback'
import Hero from './Hero/Hero'
import HowItWorks from './HowItWorks/HowItWorks'
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
      <Feedback/>
      <HowItWorks/>
      <Faqs/>
    </>
  )
}

export default Home