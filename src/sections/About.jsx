import React from 'react'
import Header from '../components/about/Header'
import Features from '../components/about/Features'

const About = () => {
  return (
    <div className='space-y-8 lg:space-y-10 ' id='about'>
        <Header/>
        <Features/>
    </div>
  )
}

export default About