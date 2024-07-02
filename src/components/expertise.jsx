import React from 'react'
import '../components/expertise.css'
import strategy from '../assets/strategy.png'
import growing from '../assets/growing.png'
import passionate from '../assets/passionate.png'
import solution from '../assets/solution.png'

export const Expertise = () => {
    return (
        <div>
            <div className='expertise'>
                <h6 style={{ textAlign: 'left' }}>[WHY CHOOSE US]</h6>

                <div className='d-flex justify-content-center align-items-center' id='expertise'>
                    <div className='animated-image top-to-bottom'>
                        <img src={strategy} alt='strategy' className='w-75' />
                    </div>
                    <div className='animated-image bottom-to-top'>
                        <img src={growing} alt='growing' className='w-75' />
                    </div>
                    <div className='animated-image top-to-bottom'>
                        <img src={passionate} alt='passionate' className='w-75' />
                    </div>
                    <div className='animated-image bottom-to-top'>
                        <img src={solution} alt='solution' className='w-75' />
                    </div>
                </div>
            </div>

        </div>
    )
}

