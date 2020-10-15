import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import ServiceByCardDetails from '../ServiceByCardDetails/ServiceByCardDetails';
import Sidebar from '../SideBar/Sidebar';

const ServiceByCard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [serviceByCard, setServiceByCard] = useState([]);
    useEffect(() => {
        fetch('https://vast-basin-43815.herokuapp.com/orderCard', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(response => response.json())
            .then(data => setServiceByCard(data))
    }, [])
    return (
        <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-2 pr-0">
                <Sidebar></Sidebar>
            </div>
            <div className="col-lg-10 col-md-8 col-sm-8 col-xs-10  pl-5 py-3" style={{ backgroundColor: '#F4F7FC', height: '100vh' }}>
                <h3>Service Card Details</h3>
                <div className="row">
                    {
                        serviceByCard.map(serviceCard => <ServiceByCardDetails key={serviceCard._id} serviceCard={serviceCard}></ServiceByCardDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceByCard;