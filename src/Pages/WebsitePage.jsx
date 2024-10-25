import React from 'react'
import Hero from '../components/Hero/Hero'
import About from '../components/Aboutus/About'
import Exchange from '../components/Exchange/Exchange'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const WebsitePage = () => {
  return (
    <div className="App">
      <Hero />
      <About />
      <Exchange />
      <Contact />
      <Footer />
    </div>
  )
}

export default WebsitePage
