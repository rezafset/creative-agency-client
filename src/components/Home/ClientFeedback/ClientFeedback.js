import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

const ClientFeedback = () => {
    const [review, setReview] = useState([]);
    
    useEffect(()=>{
        fetch('https://vast-basin-43815.herokuapp.com/reviewList')
        .then(response=> response.json())
        .then(data=>setReview(data))
    } ,[])

    return (
        <div className="container" id="review">
            <h3 className="text-center pb-4 font-weight-bold"> <span style={{color: '#171B4E'}}>Clients</span>  <span style={{color: '#7AB259'}}>Feedback</span></h3>
            <div className="row">
                {
                    review.map(review=> <FeedbackCard key={review._id} review={review}></FeedbackCard>)
                }
            </div>
        </div>
    );
};

export default ClientFeedback;