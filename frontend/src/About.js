import React from 'react'

import profile from './images/ma.jpg';

function About() {
    return (
        <div className='about'> 
                <h2>About Me</h2>
               
                <div className='about__info'>
                     <img src={profile} alt='My-picture' />
                    <p className='about__bios'> 
                            You would be right to say that <em>"I'm an all round Tech-guy"</em>, I love business, programming, undoctored-challenges, learning.
                            I primarily do Full Stack web development using MERN of JavaScript but I'm proficient in Python.
                            Currently I maintain and develop software projects at <a  href="http://github.com/Marcel-Ezenagu">GitHub</a>
                            <br  />
                            In my own time I love to learn new things about technology and software development.
                            <br />
                            There are so many things I said I would never do when I was younger and I now do many of them. 
                            I would give you detailed examples but I don't want to unnecessarily alarm you. 
                        <br/> The point is that I subscribe to being "open to changing one's mind." , it's often a sign of growth.
                            I have an open mindset when it comes to learning and I see myself as a perpetual student as I perceive 
                            knowledge as something that's never complete.
                        <br />It's been helpful in Business Transformation as in other spheres.
                        </p>
                    

                </div>
            </div>
       
    )
}

export default About
