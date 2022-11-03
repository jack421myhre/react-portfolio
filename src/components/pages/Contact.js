import React, { useState } from 'react';
import '../../styles/Contact.css';
import { validateEmail } from '../../utils/helpers';

function Contact() {

    const [formContent, setFormContent] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const inputType = e.target.name;
        const inputValue = e.target.value;

        if (!inputValue) {
            setErrorMessage(`Make sure your ${inputType} is filled out before submitting.`);
        } else if (inputType === 'email') {
            const validEmail = validateEmail(inputValue);
            if (!validEmail) {
                setErrorMessage('Please enter a valid email address.');
            } return;
        } else if (!errorMessage) {
            setFormContent({ ...setFormContent, [inputType]: inputValue });
        }
    };

    return (
        <div className='d-flex flex-column align-items-center contact-container'>
            <div className='contact-title'>
                <h1>Contact Me</h1>
            </div>

            <div className='form-container'>
                <form>
                    <div className='mb-3'>
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control" onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" onChange={handleInputChange} />
                        <div className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="message" className="form-label">Message</label>
                        <textarea type="text" className="form-control"></textarea>
                    </div>
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </form>
            </div>
        </div>

    );
}

export default Contact;