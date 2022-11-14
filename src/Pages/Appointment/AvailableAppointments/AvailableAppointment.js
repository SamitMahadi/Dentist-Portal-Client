import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <section className='my-10'>
            <p className='text-center text-secondary text-xl  font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='mt-8 mx-8 grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }

            </div>
            {

                treatment &&
                <BookingModal
                selectedDate={selectedDate}
                treatment={treatment}
                ></BookingModal>

            }
        </section>
    );
};

export default AvailableAppointment;