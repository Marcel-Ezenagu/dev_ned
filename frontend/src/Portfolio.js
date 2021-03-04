import React from 'react'
import './Portfolio.css';

function Portfolio({img, title, brief, description, url}) {
    return (
        <div>
            <h3>{title}</h3>
            <div className='portfolio'>
            <a href={url}>
                    <img  src={img} alt={title} />
            </a>
            <div className='portfolio__info'> 
                {/* <h3 className='portfolio__title'>{title}</h3> */}
                <h5>{brief}</h5>
                <h6>Features{' '}:</h6>
                <p className='portfolio__desc'>{description}</p>
            
            </div>
             
            
            
        </div>
        </div>
        
    )
}

export default Portfolio
