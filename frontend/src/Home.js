import React from 'react'
import { Link } from 'react-router-dom';

import Ryped from "react-typed"
import pager from "./images/bg 1.jpg"
export default function Home() {

    return (
        <div className='home'>
            <div className='home-info'>
                <h1>I'm Marcel Ezenagu</h1>
                <p>A Nigerian based Business Transformer.</p>
                <Ryped
                    className="typed-text"
                    strings={["Web Design", "Web Development","SEO","Google Ads", "Facebook Ads SMM"  ]}
                    typeSpeed={40}
                    backSpeed={55}
                    loop
                />
                
            </div>
        </div>

    )
}
