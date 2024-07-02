import React from 'react'
import '../components/landing.css'
import heading from '../assets/media_head.png'

export const LandingSection = () => {
  return (
    <div>
        <div className="bg-image">
            <h5 className='text-center mt-4 pt-3 pb-4' style={{color: '#ACA3A3'}}>A BRAND DIGITAL STUDIO</h5>
            <div className='mt-4 pt-5'>
            <img src={heading} alt="Heading" className="heading" />
            </div>
            {/* <div className='down-arrow mt-5'><i class='fas fa-arrow-down' style={{fontSize:'24px'}}></i></div> */}
        </div>
    </div>
  )
}
