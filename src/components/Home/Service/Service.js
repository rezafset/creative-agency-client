import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('https://vast-basin-43815.herokuapp.com/service')
            .then(response => response.json())
            .then(data => setService(data))
    }, [])

    return (
        <div className="container py-4" id="portfolio">
            <h3 className="text-center py-5 font-weight-bold">Provide Awesome <span style={{ color: '#7AB259' }}>Services</span></h3>
            <div className="row">
                {
                    service.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;