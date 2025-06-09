import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Productos from '../components/Productos'
import Cart from '../components/Cart'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Productos />
    </div>
  )
}

export default HomePage