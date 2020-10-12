import React from 'react';

const FeedbackCard = ({ feedBack }) => {
    return (
        <div className="col-md-4 py-4 ">
            <div class="card text-center p-3">
                <div class="card-body">
                    <div className="d-flex">
                        <img className="card-img" src={feedBack.customerImg} alt="" />
                        <div className="">
                            <h5 class="card-title ml-3 font-weight-bold">{feedBack.customerName}</h5>
                            <h6 class="card-subtitle mb-2">{feedBack.customerDesignation}</h6>
                        </div>
                    </div>
                    <p class="card-text text-secondary">{feedBack.customerDetails}</p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;