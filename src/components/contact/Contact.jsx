import "./contact.scss"
import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [message, setMessage] = useState(false)

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_ivlbxz3', 'template_imp8dwa', e.target, 'user_Z9Kd1CK4A86HrnrYhuMxn')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        setMessage(true)
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={sendEmail}>
                    <input type="text" placeholder="Name" name="name"/>
                    <input type="text" placeholder="Email" email="email" />
                    <input type="text" placeholder="Subject" subject="subject" />
                    <textarea placeholder="Your message.." name="message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks! I'll reply ASAP 😊 </span> }
                </form>
            </div>
        </div>
    )
}

export default Contact
