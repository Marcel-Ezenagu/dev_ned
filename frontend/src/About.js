import React from 'react'
import './About.css';
import Container from 'react-bootstrap/Container';


function About() {
    return (
        <Container expand='lg'>

            <div className='about'> 
                <img src='images/ma.jpg' alt='About' />
                <div className='about__info'>
                    <h2>About Me</h2>
                    <p className='about__bios'> 
                        I do Full Stack web development using React && Django for now as they are phenomenal tools. 
                        With them I'm able to adequately render in .py and .js languages. 
                        There are so many things I said I would never do when I was younger and I now do many of them. 
                        I would give you detailed examples but I don't want to unnecessarily alarm you. 
                        The point is that I subscribe to being "open to changing your mind." , it's often a sign of growth.
                        I have an Open mindset when it comes to learning and I see myself as a perpetual student cos I percieve 
                        knowledge as something that's never complete.
                    </p>
                    

                </div>
            </div>
        </Container>
       
    )
}

export default About
