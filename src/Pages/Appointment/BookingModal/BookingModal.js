import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment
    const date = format(selectedDate, 'PP')
    const handleBooking=event=>{
        event.preventDefault();
        const form  = event.target;
        const name =form.name.value;
        const slot = form.slot.value;
        const phone = form.phone.value;
        const email  = form.email.value;
        console.log(date,slot,name,email,phone);
        const booking={
            selectedDate:date,
            treatment:name,
            patient:name,
            name,
            slot,
            email,
            phone,

        }
        console.log(booking);

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-6 mt-10'>
                        <input type="text" disabled value={date} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot,i)=> <option
                                 value={slot}
                                 key={i}
                                 >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Full Name" className="input input-bordered w-full" />
                        <input type="text" name='phone' placeholder="Phone Numer" className="input input-bordered w-full" />
                        <input type="text" name='email' placeholder="Email Adress" className="input input-bordered w-full" />
                        <button className="btn btn-accent w-full text-white" type='submit' value='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;