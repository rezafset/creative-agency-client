import React from 'react';
import customer1 from '../../../resources/images/customer1.png';
import customer2 from '../../../resources/images/customer2.png';
import customer3 from '../../../resources/images/customer3.png';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

const ClientFeedback = () => {
    const feedBack = [
        {   
            id: '01',
            customerImg: customer1,
            customerName: 'Nash Patrik',
            customerDesignation: 'CEO, Manpol',
            customerDetails: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore libero odit perspiciatis provident!'
        },
        {
            id: '02',
            customerImg: customer2,
            customerName: 'Miriam Barron',
            customerDesignation: 'CEO, Manpol',
            customerDetails: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore libero odit perspiciatis provident!'
        },
        {
            id: '03',
            customerImg: customer3,
            customerName: 'Nash Patrik',
            customerDesignation: 'CEO, Manpol',
            customerDetails: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore libero odit perspiciatis provident!'
        }
    ]
    return (
        <div className="container">
            <h3 className="text-center pb-4 font-weight-bold">Clients <span style={{color: '#7AB259'}}>Feedback</span></h3>
            <div className="row">
                {
                    feedBack.map(feedBack=> <FeedbackCard key={feedBack.id} feedBack={feedBack}></FeedbackCard>)
                }
            </div>
        </div>
    );
};

export default ClientFeedback;