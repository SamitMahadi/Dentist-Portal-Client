import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({selectedDate}) => {
    return (
        <div>
            <p className='text-center text-secondary text-xl  font-bold'>Available Appointments on {format(selectedDate,'PP')}</p>
        </div>
    );
};

export default AvailableAppointment;