import React from 'react'
import About from './About';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Resume from './Resume';
import Works from './Works';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './Contact';

function App() {
  return (
<div  className='app'>
    <Router >

    <div className='content-wrapper'>
    
          <Header />
             
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
         
     
  </div>
  )
}

export default App
