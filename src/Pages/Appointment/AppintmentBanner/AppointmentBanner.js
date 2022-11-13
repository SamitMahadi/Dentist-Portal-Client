import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
   
    return (
        <header className='my-6 bg-hero bg-cover'>
            <div className="hero py-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='' className="lg:w-1/2 rounded-lg shadow-2xl ml-6" />
                    <div className='mr-6'>
                        <DayPicker
                        className='bg-white rounded-lg shadow-xl p-2 '
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        />
                        
                    </div>
                    
                </div>
                
            </div>
        </header>
    );
};

export default AppointmentBanner;