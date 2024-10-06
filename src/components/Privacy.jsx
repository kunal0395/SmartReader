import React from 'react';
import { Link } from 'react-router-dom'; 

function Privacy() {
    return (
        <div className="w-full bg-[#2d2d36] h-[53rem] text-white inline-block">
            <div className='font-extrabold ml-80 mt-14 text-8xl'>
                <h1 className="">Privacy</h1>
                <h1 className="mb-8">Policy</h1>
            </div>
            <div className="max-w-[47rem] mx-auto p-6 font-xl text-lg">
                <p className="mb-8">We don’t store your data, period.</p>
                <p className="mb-8">We only keep track of the total number of daily users and count daily statistics about the transfers. This means we can see the total number of successful and failed file transfers, and to see how often our fallback was used. This way we can quickly detect bugs or issues, and act fast to fix them.</p>
                <p className="mb-8">SmartReader is never stored your data anywhere. Privacy and security are some of the main goals of this platform.</p>
                <p className="mb-8">If you still have any concerns about privacy, don't hesitate to{' '}
                    <Link to="/contact" className="underline decoration-orange-500 decoration-2 cursor-pointer">send us a message.</Link>
                </p>
                <p className="mb-8">Even though we do our utmost best to make our platform as secure as possible, your security is still your own responsibility. The Files are meant to be private, so use them as such.</p>
            </div>
        </div>
    );
}

export default Privacy;
