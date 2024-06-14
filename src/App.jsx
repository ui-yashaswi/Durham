import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Gallery from './Components/Gallery'
import Recent from './Components/Recent'
import Services from './Components/Services'
import News from './Components/News'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Navbar/> 
      <Home/>
      <About/>
      <Gallery/>
      <Skills/>
      <Recent/>
      <Services/>
      <News/>
      <Footer/> 
    </div>
  )
}

export default App
