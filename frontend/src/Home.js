import { Carousel } from 'bootstrap';
import React from 'react'
import './Home.css';
import { Jumbotron, Button } from 'react-bootstrap';


function Home() {

    return (
    <div>
           <Jumbotron as='div' fluid >
        <h1>Marcel</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
        
    </div>
        
    )
}

export default Home
