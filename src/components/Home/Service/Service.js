import React from 'react';
import service1 from '../../../resources/images/icons/service1.png';
import service2 from '../../../resources/images/icons/service2.png';
import service3 from '../../../resources/images/icons/service3.png';
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {
    const service = [
        {
            icon: service1,
            title: 'Web & Mobile Design',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum temporibus quo nisi laudantium, quis porro.'

        },
        {
            icon: service2,
            title: 'Graphic Design',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum temporibus quo nisi laudantium, quis porro.'

        },
        {
            icon: service3,
            title: 'Web Development',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum temporibus quo nisi laudantium, quis porro.'

        }
    ]
    return (
        <div className="container py-4">
            <h3 className="text-center py-5 font-weight-bold">Provide Awesome <span style={{color: '#7AB259'}}>Services</span></h3>
            <div className="row">
                {
                    service.map(service=> <ServiceCard key={service.title} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;