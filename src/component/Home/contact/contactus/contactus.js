import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com';
import 'bootstrap';
import 'react-bootstrap';
import './contactus.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_timok48';
            const templateId = 'template_lyo1xq8';
            const userId = 'OKPc3nssHifGDSPuv';
            const templateParams = {
                name,
                email,
                message
            };


            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));
    
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }

        init('user_id');

        if(setEmailSent(true)){
            alert('email send sucessfully!');
        }
    }
    return (
        <div>
            <div className='contact'>
                <div>
                  <center><h3>Contact Us</h3></center>
                </div>
                <br></br>
                <br></br>
                <div>
                    <div>
                       <label for="exampleInputEmail1">Your Name</label>
                       <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" onChange={e => setName(e.target.value)}/>
                    </div>
                    <br></br>
                    <div>
                       <label for="exampleInputEmail1">Your Email</label>
                       <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <br></br>
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">Your Message</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={e => setMessage(e.target.value)}></textarea>
                    </div>
                    <br></br>
                    <div>
                      <button class="btn btn-primary" type="submit"  onClick={submit}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;