import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
const HomeContact = () => {
    return (
        <div className='mt-16 bg-appointment bg-cover' >
            <div className='pt-16 pb-16'>
                <div className='text-center'>
                    <h2 className='text-primary text-xl font-bold uppercase'>Contact Us</h2>
                    <h1 className='text-3xl font-bold text-white'>Stay Connect With Us</h1>
                </div>
                <form className='text-center'>
                    <input type="email" placeholder="Email Adress"name='email' className=" mb-4 mt-4 input input-bordered  w-full max-w-xs" /><br />
                    <input type="text" placeholder="Subject" className="mb-4 input input-bordered w-full max-w-xs" /><br />
                    <textarea type='text' name='message' className="textarea textarea-bordered w-80 h-48" placeholder="Your Message"></textarea>
                </form>
                <div className='text-center '>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default HomeContact;