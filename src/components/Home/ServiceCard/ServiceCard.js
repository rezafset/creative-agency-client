import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    return (
        <div className="col-md-4">
            <div class="card text-center p-3">
                <img className="card-img  mx-auto" src={service.icon} alt="" />
                <div class="card-body">
                    <h5 class="card-title font-weight-bold">{service.title}</h5>
                    <p class="card-text text-secondary">{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;