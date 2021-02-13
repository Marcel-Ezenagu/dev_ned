import React from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container';

function Footer() {
    return (
        <Container>
        <div className='footer'>
            <div className='footer__top'>
                <a href='https://facebook.com/ezenagumarcel'>
                   Facebook
                </a> |
                
                <a href='http://github.com/Marcel-Ezenagu'>
                    GitHub 
                </a>|
                
                <a href='https://www.linkedin.com/in/marcelezenagu'>
                    LinkedIn                 
                </a>
                   
            </div>
                 <p>  © 2020 A big s/o to the CP team - More Blessing !!! <br />· Marcel </p>
            </div>
        </Container>
    )
}

export default Footer
