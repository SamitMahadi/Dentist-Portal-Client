
import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';

import { AuthContext } from '../../../Contexts/AuthProvider';

const BookingModal = ({ treatment,setTreatment,selectedDate,refetch }) => {
    const { name: treatmentName, slots,price } = treatment;
    const date = format(selectedDate, 'PP')
    const { user } = useContext(AuthContext)



    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const slot = form.slot.value;
        const phone = form.phone.value;
        const email = form.email.value;
        
        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
            price

        }
        fetch('https://dentist-portal-server-nine.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('Booking Confirmed');
                    refetch()
                }
                else{
                    toast.error(data.message)
                }

            })
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-6 mt-10'>
                        <input type="text" disabled value={date} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' defaultValue={user?.displayName} readOnly placeholder="Full Name" className="input input-bordered w-full" />
                        <input type="text" name='phone' placeholder="Phone Numer" className="input input-bordered w-full" />
                        <input type="text" name='email' defaultValue={user?.email} disabled readOnly placeholder="Email Adress" className="input input-bordered w-full" />
                        <button className="btn btn-accent w-full text-white" type='submit' value='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;