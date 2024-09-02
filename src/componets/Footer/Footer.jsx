import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-main'>
        <div className='footer-list-div'>
        <div className='footer-div1'>
        <h3>Travel</h3>
        <p>Travel you choose the destination, we offer you the experience</p>
       </div>
       <div className='footer-div2'>
      
        <ul>
        <h3>About</h3>
            <li>About Us</li>
            <li>Features</li>
            <li>New & Blog</li>
        </ul>
        </div> 
       <div className='footer-div3'>
        
        <ul>
        <h3>Company</h3>
            <li>Team</li>
            <li>Plan y Pricing</li>
            <li>Become a member</li>
        </ul>

        </div> 
       <div className='footer-div4'>
       
        <ul>
        <h3>Support</h3>
            <li>FAQs</li>
            <li>Support Center</li>
            <li>Contact Us</li>
        </ul>
        </div> 

        </div>
       
       <div className='footer-botter'>
        <p>© 2021 Bedimcode. All rigths reserved.</p>
        <div className='footer-agrement'>
            <a href="#">Terms & Agreements</a>
            <a href="#">Privacy Policy</a>
        </div>
       </div>

       
      
    </div>
  )
}

export default Footer
