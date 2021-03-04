import React from 'react'
import { Link } from 'react-router-dom';

import Ryped from "react-typed"
export default function Home() {

    return (
        <div className='home'>
            <div className='home-info'>
                <h2>I'm Marcel.</h2>
                <p>An Entrepreneur and Business Transformer.</p>
                <br/>
                <Ryped
                    className="typed-text"
                    strings={[" Software Developer","Web Designer"," SEO","Google Ads", " Facebook Ads SMM"  ]}
                    typeSpeed={40}
                    backSpeed={55}
                    loop
                />
                <div >
                  <Link to='/contact'> <button style={{  width: 'fit-content', borderRadius:"0.3rem"}} >Contact Me</button></Link> 
                </div>
            </div>
        </div>

    )
}
