import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const servicesData = [

        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Fluoride treatments are  treatments containing a fluoride that a dentist will apply to a persons teeth to improve health and the risk of cavities.',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Fillings treat tooth decay, preventing further damage and as well as the possibility of pain and infection. A filling seals a hole in the tooth.',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Teeth whitening is one of the most popular  dentistry treatments offering a quick, non-invasive and affordable way to enhance a smile.',
            img: whitening
        },

    ]

    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h2 className='text-primary text-xl font-bold uppercase'>Our Services</h2>
                <h1 className='text-3xl font-bold'>Services We Provide</h1>
            </div>
            <div className='mt-8 grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;