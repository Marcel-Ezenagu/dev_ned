import React from 'react'
import './Resume.css';
import SkillsBar from './SkillsBar';
import Container from 'react-bootstrap/Container'
function Resume() {
    

    return (
        <Container>
              <div className='resume'>
            <div className='resume__ed'>
            <h5>EDUCATION</h5>
               
               <div className='resume__edRight'>
                   <h5><i>Bachelor of Engineering </i> · </h5> 
                   <a href='https://futo.edu.ng'><h4>Federal University of Technology Owerri</h4></a>
   
               </div>
              
            </div>
                


            <div className='resume__sk'>
                   <h5>SKILLS</h5>
                
                    
                  <SkillsBar />
            </div>
        </div>


        </Container>

    )
}

export default Resume
