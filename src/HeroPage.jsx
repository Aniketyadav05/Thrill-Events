import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

import Services from './components/Services'
import Working from './components/Working'
import  Gallery from './components/Gallery'
import Contact from './components/Contact'

import { BrowserRouter} from 'react-router-dom';
import ServicesSection from './components/ServicesSection'

import Card from './components/Card'
import Drop from './components/Drop'
const HeroPage = () => {
  return (
    <>
    
    <Hero />
    <ServicesSection />
    <Services />
    <Working/>
    <Gallery/>
    <Card/>
    <Contact/>
    
    
    </>
  )
}

export default HeroPage