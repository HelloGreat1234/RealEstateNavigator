import React from 'react'
import Navbar from '../components/Navbar'
import PropertyCard from '../components/PropertyCard'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <PropertyCard img='https://wallpaperaccess.com/full/31193.jpg' name='Hotel Milan - Sector 10' p1='2 km away from metro' p2='4 star hotel' p3='$240 per night'/>
      <Footer />
    </>
  )
}
