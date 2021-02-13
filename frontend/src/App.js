import React from 'react'
import About from './About';
import './App.css'
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Resume from './Resume';
import Works from './Works';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './Contact';

import Container from 'react-bootstrap/Container';
function App() {
  return (
<div>
    <Container fluid>
    <Router >
    
    <Header />

      
        
        
        <div className='app'>
            <Switch>
              <Route path='/contact'>

                <Contact />
              </Route>

              <Route path='/about'>

                <About />
              </Route>

              <Route path='/works'>
                <Works />
      
              </Route>
        
              <Route path='/resume'>
                
              <Resume />
              </Route>
      

              <Route path='/'>
                
                <Home /> 
              </Route>
            </Switch>
      
        </div>     
      
       <Footer />        

    </Router>
         
      </Container>
  </div>
  )
}

export default App
