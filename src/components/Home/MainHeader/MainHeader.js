import React from 'react';
import frame from '../../../resources/images/logos/Frame.png';

const MainHeader = () => {
    return (
        <div className="container py-5 my-5">
            <div className="row">
                <div className="col-md-6 mt-5 animate__animated animate__fadeInLeft">
                    <h1 className="font-weight-bold">Let's Grow Your <br/> Brand To The <br/> Next Level</h1>
                    <p className="py-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/> Neque amet earum doloremque repudiandae iusto ipsam.</p>
                    <button className="btn btn-dark text-light brand-button"> <span>Hire Us</span></button>
                </div>
                <div className="col-md-6 animate__animated  animate__fadeInRight">
                    <img className="img-fluid" src={frame} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;