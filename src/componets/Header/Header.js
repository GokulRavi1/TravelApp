import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Header.css'
import { assets } from '../../assets/assets'



const Header = () => {
  return (
    <div className='Header'>
      <div className='Header-content'>
            <span>Discover your place</span>
            <h1>Explore The <br/> Best  <b>Beautiful <br/>Beaches</b></h1>
            <button>Explore</button>



        <div className='Header-links'>
        <i class="fa-brands fa-facebook"></i>
        </div>
        </div>

      <div className='Header-bottom'>
        <div className='home-info'>
          <h5>5 best places<br/> to visit</h5>
          <a>More <img src={assets.arrowright} /> </a>
          
        </div>
        <img src={assets.home2} />


      </div>
    </div>
  )
}

export default Header
