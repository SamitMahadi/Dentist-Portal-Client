import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className=" p-10 bg-footer   bg-cover ">
            <div className='footer mx-16'>
                <div>
                    <span className="footer-title text-black">Services</span>
                    <Link to='/' className="link link-hover">Emergency Checkup</Link>
                    <Link to='/' className="link link-hover">Monthly Checkup</Link>
                    <Link to='/' className="link link-hover">Weekly Checkup</Link>
                    <Link to='/' className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title text-black">ORAL HEALTH</span>
                    <Link to='/' className="link link-hover">Fluoride Treatment</Link>
                    <Link to='/' className="link link-hover">Cavity Filling</Link>
                    <Link to='/' className="link link-hover">Teath Whitening</Link>
                   
                </div>
                <div>
                    <span className="footer-title text-black">OUR ADDRESS</span>
                    <Link to='/' className="link link-hover">New York - 101010 Hudson</Link>
                    
                </div>
            </div>
            <footer className="footer footer-center p-4 mt-8 text-base-content">
                <div>
                    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </footer>
    );
};

export default Footer;