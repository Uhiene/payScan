import React from 'react'
import AboutHeader from './AboutHeader'
import AboutHero from './AboutHero'

const About = () => {
  return (
    <div className='space-y-8 md:space-y-10 ' id='about'>
        <AboutHeader/>
        <AboutHero/>
    </div>
  )
}

export default About