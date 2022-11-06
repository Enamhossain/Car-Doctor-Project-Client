import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {

    const [services , setServices] = useState([])


    useEffect(()=> {
       fetch('Service.json')
       .then(res => res.json())
       .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-600'>Service</p>
                  <h2 className='text-5xl font-semibold'> Our Service Area </h2>
                  <p className=' '>the majority have suffered alteration in some form, by injected humour,or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServicesCard
                      key = {service.id}
                      service = {service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;