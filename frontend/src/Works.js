import React from 'react';
import Portfolio from './Portfolio';
import './Works.css';
import logo1 from './images/a.jpg';

import logo2 from './images/h.jpg';

import logo3 from './images/air.jpg';
import port4 from './images/INPS.JPG';

import port5 from './images/kkconsult.JPG';
import port6 from './images/i-app.JPG';

import {Container, ResponsiveEmbed, Carousel} from 'react-bootstrap';
function Works() {


    return (
             <div className='works'>
                 <h3>Some Products</h3>
                <div className='works__slider'>
                    
                        <Carousel>
                                        
                        <Carousel.Item  interval='1500'>
                                        <img
                                        className="d-block w-100"
                                        src={port6}
                                        alt='Internapp Africa'
                                        />
                                        <Carousel.Caption>
                                        <h4 style={{color: "black"}} >Internapp Africa</h4>
                                    
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                        
                                    <Carousel.Item  interval='1500'>
                                        <img
                                        className="d-block w-100"
                                        src={port5}
                                        alt='kkconsult'
                                        />
                                        <Carousel.Caption>
                                        <h4 style={{color: "black"}} >KKconsult</h4>
                                    
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item  interval='1500'>
                                        <img
                                        className="d-block w-100"
                                        src={port4}
                                        alt='firsdt'
                                        />
                                        <Carousel.Caption>
                                        <h4 style={{color: "black"}} >INPS</h4>
                                    
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                
                                    <Carousel.Item  interval='1500'>
                                        <img
                                        className="d-block w-100"
                                        src={logo1}
                                        alt='firsdt'
                                        />
                                        <Carousel.Caption>
                                        <h4>Amazon Clone</h4>
                                    
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    
                                    <Carousel.Item   interval='1500'>
                                        <img
                                        className="d-block w-100"
                                        src={logo2}
                                        alt='first'
                                        />
                                        <Carousel.Caption>
                                        <h4>hulu Clone</h4>
                                    
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    
                                    <Carousel.Item   interval='1500'>
                                        <img
                                        className="d-block w-100"
                                        src={logo3}
                                        alt='first'
                                        />
                                        <Carousel.Caption>
                                        <h4>Airbnb clone</h4>
                                    
                                        </Carousel.Caption>
                                    </Carousel.Item>
                    
                        </Carousel>
               
           
   
            </div>
            {/* </div> */}
            <div>
                <h2 style={{textAlign:"center", paddingBottom:"2rem"}}>Products </h2>
            </div>
            
            <div>
            <Portfolio img={port6}
                        title="Internapp Africa"
                        brief= "A Nigerian based business that helps students access paid internship positions around Africa for now."
                        description= " · User authentication and login
                                        · Content creation feature
                                        · Clean UI/UX
                                        · Emailing service"
                        
                        url='https://internapp.co/'
                /> 
              
                <Portfolio img={port5}
                        title="KKonsult Engineering services"
                        brief= "A Port Harcourt based Engineering and Construction company specializing in residential and industrial structures."
                        description= " · React router
                                        · Clean UI/UX
                                        · Emailing service"
                        
                        url="https://kkconsult.web.app/"
                /> 
                
                <Portfolio img={port4}
                    title="INPS Lagos"
                    brief= "An educational web design project in construction-mode..."
                    description= " · React router
                                    · Clean UI/UX
                                    · Semantic UI"
                    
                    url='https://itire-school.web.app/'
                />     
                <Portfolio img={logo1}
                    title='Amazon clone'
                    brief='An e-commerce app with payment functionality.'
                    description=" · User authentication with Firebase
                    ·  React Context API
                    ·  Add to basket functionality
                    ·  Checkout page
                    ·  Payment gateway with Stripe"
                            
                    url='https://clone-d62eb.web.app/ '
                />

            
                <Portfolio img={logo3}
                    title='Airbnb clone'
                    description="
                        ·   Date picker functionality

                        ·  React Hook and Router

                        · Material UI
                    
                        ·   Ultra_Clean UI/UX.
                        · Firebase Services

                    "
                    url=' https://airbnb-m-clone.web.app'
                    brief='A rental app showing venues available for users to book.'
                />

            
                <Portfolio img={logo2}
                    title='Hulu clone'
                    brief='A web app that shows movies with respect to their genre and global rating.'
                    description= "
                        ·  Well-designed UI/UX
                        ·  React Animation Libraries
                        · React Hook
                        · React Props drillings 
                        · API Fetching

                    "
                    url=' https://hulu-clone-781fb.web.app/'

                />


            </div>
            

        </div>

           )
}

export default Works
