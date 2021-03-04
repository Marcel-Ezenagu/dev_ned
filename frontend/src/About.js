import React from 'react'

import profile from './images/Maa.jpg';

function About() {
    return (
        <div className='about' id="about"> 
                <h2>About Me</h2>
               
                <div className='about__info'>
                     <img src={profile} alt='My-picture' />
                    <p className='about__bios'> 
                            You would be right to say that <em>"I'm an all round Tech-guy"</em>, I love business, programming, undoctored-challenges, and generally, learning.
                            I'm Nigerian and primarily do Full Stack web development using MERN of JavaScript and I'm proficient in Python-Django also basically to help businesses transform their revenue.
                            Currently I maintain and develop software projects at <a  href="http://github.com/Marcel-Ezenagu">GitHub</a>
                            <br  />
                            In my own time I love to learn new things about technology, software development, self development and D😆gs.
                            <br />
                            There are so many things I said I would never do when I was younger and I now do many of them. 
                            I would give you detailed examples but I don't want to unnecessarily alarm you. 
                        <br/> The point is that I subscribe to "being open to changing one's mind." , which is often a sign of growth.
                            I have an open mindset when it comes to learning and I see myself as a perpetual student as I perceive 
                            knowledge as something that's never complete.
                        <br />It's been helpful to me in Business Transformation among other spheres.
                        </p>
                    

                </div>
            </div>
       
    )
}

export default About
