import React from 'react'
import './SkillsBar.css'


function SkillsBar() {      
    return (
        <div className='skillsBar'>
            <p className='container'>PYTHON</p>
            <div>
                <div className='skills py' >60%</div>
            </div>

            <p>JAVASCRIPT</p>
            <div className='container'>
                <div className='skills js'>40%</div>
            </div>

            <p>REACT</p>
            <div className='container'>
                <div className='skills rct'>50%</div>
            </div>

            <p>DJANGO</p>
            <div className='container'>
                <div className='skills dj'>55%</div>
            </div>

            <p>HTML</p>
            <div className='container'>
                <div className='skills html'>60%</div>
            </div>

            <p>CSS</p>
            <div className='container'>
                <div className='skills css'>50%</div>
            </div>

            <p>DBM</p>
            <div className='container'>
                <div className='skills dbm'>60%</div>
            </div>
        </div>
    )
}

export default SkillsBar
