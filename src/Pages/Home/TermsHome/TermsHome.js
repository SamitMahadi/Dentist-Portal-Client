import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import { Link } from 'react-router-dom';

const TermsHome = () => {
    return (
        <div className="hero mt-12">
            <div className="hero-content  flex-col lg:flex-row">
                <img src={treatment} className="lg:w-1/2 rounded-lg shadow-2xl "alt='' />
                <div className='pl-4'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6 text-lg">At Dental portal, your smile is our top priority. We are dedicated to providing you with the personalized and gentle care that you deserve. When you visit our office, you can expect all that modern dentistry has to offer, including a comprehensive list of general, restorative and cosmetic dental services to meet the needs of the whole family. Our goal is to assist each patient in achieving and maintaining long-term dental health and a beautiful smile.We are a dental practice devoted to restoring and enhancing the natural beauty of your smile using conservative,  long lasting smiles!.</p>
                    <Link to='/appointment'><button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TermsHome;