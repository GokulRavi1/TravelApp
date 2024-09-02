import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import About from '../About/About'
import Discover from '../Discover/Discover'
import Dicover1 from '../Discover/Dicover1'
import Place from '../Places/Place'
import Subcribe from '../Subcribe/Subcribe'
import Logo from '../Logo/Logo'
import Footer from '../Footer/Footer'


const Home = () => {
  return (
    <div className='Home'>
        <Navbar/>
        <Header/>
        <About/>
        <Discover/>
        <Dicover1/>
        <Place/>
        <Subcribe/>
        <Logo/>
        <Footer/>
    
      
    </div>
  )
}

export default Home
