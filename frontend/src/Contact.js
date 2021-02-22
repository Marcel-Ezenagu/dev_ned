import React, { useEffect, useState } from 'react';

import axios from './axios';
import Container from 'react-bootstrap/Container';

// import Pusher from 'pusher-js';


// const pusher = new Pusher('f8de3b6596f031d12de2', {
//     cluster: 'eu'
//   });

function Contact() {
   
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');


    console.log(email)
    console.log(name)
    console.log(message)
    
    // useEffect(() => {
    //     const channel = pusher.subscribe('messages');
    //     channel.bind('newMessage', function (data) {
        
    // });
    // }, [])
    

    //axios function
    const sync = async () => {
        await axios.get('/retrieve/conversation')
        .then((res) => {
            console.log(res.data);
            setMessage(res.data)
        })
    }

    const sendMessage = async (e) => {
        e.preventDefault();
        axios.post('/save/message', { 
            name,
            email,
            message,
            timestamp: Date.now()
        })

        setName('')
        setEmail('')
        setMessage('')    
    };
    
    return (

<div className='contact-form-card'>
            <form method='POST'>

                <div>
                    <label>Email</label>
                    <input name='email' type='email' placeholder='Enter your email' value={email}  onChange={e => setEmail(e.target.value)}  required />

                </div>

                <div>
                    <label>Name</label>
                    <input name='name' type='text' placeholder='Enter your Name' value={name} onChange={e => setName(e.target.value)}  required />

                </div>
               
               
                
                <div>
                    <label>Message</label>
                    <textarea name='message' placeholder='Enter your message' value={message}  onChange={e => setMessage(e.target.value)} required>
                    </textarea>

                </div >
               
               
                <button
                    type='submit'
                    label='Send Message'

                    onClick={sendMessage}>Send Message</button>              

            </form>

        </div>

    )
}

export default Contact
