import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroPage from './HeroPage'
import Work from './Work'
import Header from './components/Header'
import Footer from './components/Footer'
import Reach from './Reach'
import About from './About'
import Provides from './Provides'

import ArtistMain from './Services/ArtistMain'
import Drop from './components/Drop'
import WeddingMain from './Services/WeddingMain'

import LogicsticsMain from './Services/LogicsticsMain'
import HospitalityMain from './Services/HospitalityMain'
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HeroPage />} />
        <Route path='/Work' element={<Work />} />
        <Route path='/Reach' element={<Reach />} />
        <Route path='/About' element={<About />} />
        <Route path='/Provides' element={<Provides />} />
        <Route path='/LogicsticsMain' element={<LogicsticsMain />} />
        <Route path='/HospitalityMain' element={<HospitalityMain />} />
        <Route path='/WeddingMain' element={<WeddingMain />} />
        <Route path='/ArtistMain' element={<ArtistMain />} />
      </Routes>
      <Drop/>
      <Footer />
    </BrowserRouter>
  )
}

export default App