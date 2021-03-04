// import React from 'react';

// function Footer() {
//     return (
//         <div className='footer'>
//             <div className='footer__top'>
//                
//                    Facebook
//                 </a> |
                
//                
//                     GitHub 
//                 </a>|
                
//                 <a href='https://www.linkedin.com/in/marcelezenagu'>
//                     LinkedIn                 
//                 </a>
                   
//             </div>
//                  <p>  © 2020 A big s/o to the CP team - More Blessing !!! <br />· Marcel </p>
//         </div>
        
//     )
// }

// export default Footer

import React from 'react'

import FacebookIcon from '@material-ui/icons/Facebook'
import EmailIcon from '@material-ui/icons/Email'
import GitHubIcon from '@material-ui/icons/GitHub'

import TwitterIcon from '@material-ui/icons/Twitter'

import { Link } from 'react-router-dom';

    export default function Footer() { return (
        <div className='footer' id="cont">
            <div className="text-footer">
                <div className='icone'>
                <a href='http://github.com/Marcel-Ezenagu'> <GitHubIcon style={{color:"red"}} /> </a>
                </div>
                <div className='icone' id='phone'>
                    <a href='https://facebook.com/ezenagumarcel'>  <FacebookIcon style={{color:"red"}} />
                    </a>   
                </div>
                <div className='icone' id='email'>
                    <Link to='/contact' >
                        <EmailIcon  style={{ color: "red" }} />
                    </Link>
                </div>
            </div>
            <hr style={{ color: "black" }} />
            <div>
                <p style={{ textAlign: "center" }}>All rights reserved © 2021 - M.A.R.C.E.L  </p>
            </div>

            
        </div>
    )
}

