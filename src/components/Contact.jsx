import React from 'react';

function Contact() {
    const handleSubmit = () => {
        alert('Form submitted successfully!');
    };
    return (
        <div className="bg-[#2d2d36] text-white p-8">
            <div className="font-extrabold text-8xl text-center mb-14">
                <h1>Contact</h1>
            </div>

            <div className="max-w-[47rem] mx-auto font-xl text-lg flex justify-center">
                <p>If you have any questions, requests or other feedback we would love to hear it!</p>
            </div>

            <div className="flex justify-center space-x-6 mt-6">
                <a href="mailto:kp3244510@gmail.com">
                    <img src="email.png" alt="Email" className="w-h-12 h-12 rounded-lg"/>
                </a>
                <a href="https://www.linkedin.com/in/kunal-patil-98a593285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <img src="linkedin.png" alt="LinkedIn" className="w-h-12 h-12 rounded-lg"/>
                </a>
            </div>

            <form className="max-w-xl mx-auto mt-5" action="https://formspree.io/f/xvoebwzg" method="POST" onSubmit={handleSubmit}>
                <input type='text' name="name" placeholder='Name' className="mb-4 p-2 w-full bg-[#2d2d36] outline-none border-b border-white flex"/>
                <input type='email' name="email" placeholder='Email' className="mb-4 p-2 w-full bg-[#2d2d36] outline-none border-b border-white flex"/>
                <textarea 
                    name="message"
                    placeholder="Enter your message here. If you want to report a bug, please let us know if you were using the app or web version." 
                    className="mb-4 p-2 w-full bg-[#2d2d36] outline-none border-b border-white flex"
                ></textarea>
                <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded">Send</button>
            </form>
        </div>
    );
}

export default Contact;
