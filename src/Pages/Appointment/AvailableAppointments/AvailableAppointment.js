
import React, { useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointment = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP')
    const { data: appointmentOptions = [],refetch,isLoading } = useQuery({
        queryKey: ['appointmentOptions',date],
        queryFn: () => fetch(`https://dentist-portal-server-nine.vercel.app/appointmentOptions?date=${date}`)
            .then(res => res.json())
    })

    if(isLoading){
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch('https://dentist-portal-server-nine.vercel.app/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])
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
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>

            }
        </section>
    );
};

export default AvailableAppointment;