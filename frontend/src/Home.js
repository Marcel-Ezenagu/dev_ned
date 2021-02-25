import React from 'react'
import { Link } from 'react-router-dom';

import Ryped from "react-typed"
export default function Home() {

    return (
        <div className='home'>
            <div className='home-info'>
                <h1>I'm Marcel Ezenagu</h1>
                <p style={{fontWeight: "900"}}>A Nigerian based...</p>
                <Ryped
                    className="typed-text"
                    strings={["Business Transformer","Web Designer", "Web Developer","SEO","Google Ads", "Facebook Ads SMM"  ]}
                    typeSpeed={40}
                    backSpeed={55}
                    loop
                />
                <div>
                    <button style={{position: "relative", bottom: "20%"}} >Get In Touch</button>
                </div>
            </div>
        </div>

    )
}
