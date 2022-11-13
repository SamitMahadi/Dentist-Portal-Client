import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({selectedDate}) => {
    return (
        <section>
            <p className='text-center text-secondary text-xl  font-bold'>Available Appointments on {format(selectedDate,'PP')}</p>
        </section>
    );
};

export default AvailableAppointment;