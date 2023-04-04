import React from 'react'
import IMAGE from '../images/ronaldo.png'

export default function Navbar(){
    return(
        <nav>
            <img className='nav-logo' src={IMAGE} />
        </nav>
    )
}