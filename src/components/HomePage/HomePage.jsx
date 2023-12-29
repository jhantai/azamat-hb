import React from 'react'
import './HomePage.css'
import podarok from '../images/podarok.png'

const HomePage = () => {
  return (
    <div className='HomePage-home'>
        <div className='background'>
    <a href="/TextPage"><input type="button" value='OPEN IT  !!!!' className='HomePage-style'/></a>
    </div>
    <img src={podarok} alt=" "  className='podarok'/>
    </div>
  )
}

export default HomePage
