import React from 'react'
import IMAGE from '../images/frame.jpg'

export default function Hero() {
    return(
        <section>
            <img src={IMAGE} className="hero-photo"/>
            <h1 className="hero-Header ">
                Online Experience
            </h1>
            <p className="hero-text">
                this is the onine section
                you know how it is, greatness
                opene pom pene, weldone
                na we dey run this town
            </p>
        </section>
        
    )
        
}