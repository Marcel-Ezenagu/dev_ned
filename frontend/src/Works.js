import React from 'react';
import Portfolio from './Portfolio';
import './Works.css';
import logo1 from './images/a.jpg'

import logo2 from './images/h.jpg'

import logo3 from './images/air.jpg'


import {Container, ResponsiveEmbed, Carousel} from 'react-bootstrap';
function Works() {


    return (
             <div className='works'>
            
                <div className='works__slider'>
                    
  <Carousel>
                
                <Carousel.Item  interval='1500'>
                    <img
                    className="d-block w-100"
                    src={logo1}
                    alt='firsdt'
                    />
                    <Carousel.Caption>
                    <h4>Amzon ck</h4>
                   
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item   interval='1500'>
                    <img
                    className="d-block w-100"
                    src={logo2}
                    alt='first'
                    />
                    <Carousel.Caption>
                    <h4>'note'</h4>
                   
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item   interval='1500'>
                    <img
                    className="d-block w-100"
                    src={logo3}
                    alt='first'
                    />
                    <Carousel.Caption>
                    <h4>'note'</h4>
                   
                    </Carousel.Caption>
                </Carousel.Item>
                
                </Carousel>
               
           
   
</div>
                {/* </div> */}
            
            <div>
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
