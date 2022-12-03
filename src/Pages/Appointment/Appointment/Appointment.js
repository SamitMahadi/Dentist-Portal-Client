import React, { useState } from 'react';
import useTitle from '../../../Hooks/useTitle';
import AppointmentBanner from '../AppintmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointments/AvailableAppointment';
const Appointment = () => {
    useTitle('Appointment')
    const [selectedDate,setSelectedDate]=useState(new Date())
    return (
        <div>
            <AppointmentBanner
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppointment
             selectedDate={selectedDate}
            ></AvailableAppointment>
        </div>
    );
};

export default Appointment;