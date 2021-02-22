import React from 'react'

import profile from './images/ma.jpg';

function About() {
    return (
            <div className='about'> 
                <img src={profile} alt='About' />
                <div className='about__info'>
                    <h2>About Me</h2>
                    <p className='about__bios'> 
                        I do Full Stack web development using React && Django for now, as they are phenomenal tools. 
                        With them I'm able to adequately render in transform ideas to wares,this I find exciting. <br/>
                        There are so many things I said I would never do when I was younger and I now do many of them. 
                        I would give you detailed examples but I don't want to unnecessarily alarm you. 
                     <br/>   The point is that I subscribe to being "open to changing one's mind." , it's often a sign of growth.
                        I have an open mindset when it comes to learning and I see myself as a perpetual student as I perceive 
                        knowledge as something that's never complete.
                    <br/>It's been helpful in Business Transformation as in other spheres.                    </p>
                    

                </div>
            </div>
       
    )
}

export default About
