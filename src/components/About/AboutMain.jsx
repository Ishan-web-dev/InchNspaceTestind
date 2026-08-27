import React from 'react'
import AboutHero from './AboutHero'
import OurStory from './OurStory'
import { Philosopher } from 'next/font/google'
import Philosophy from './Philosophy'
import Founder from './Founder'
// import AboutStats from './AboutStats'
import Values from './Values'
import AboutCta from './AboutCta'
import Stats from '../Home/Stats'

const AboutMain = () => {
  return (
    <>
    <AboutHero />
    <OurStory />
    <Philosophy />
    <Founder />
    {/* <AboutStats /> */}
    <Stats />
    <Values />
    <AboutCta />
    </>
  )
}

export default AboutMain