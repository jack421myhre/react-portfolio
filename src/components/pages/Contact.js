import React from 'react';
import '../../styles/Contact.css';

function Contact() {


    return (
        <div className='d-flex flex-column align-items-center contact-container'>
            <div className='contact-title'>
                <h1>Contact Me</h1>
            </div>

            <div className='form-container'>
                <form>
                    <div className='mb-3'>
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" />
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