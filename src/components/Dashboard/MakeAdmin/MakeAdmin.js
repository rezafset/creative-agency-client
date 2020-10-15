import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../SideBar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('https://vast-basin-43815.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Review Added Successfully');
                }
            })
    };
    return (
        <div className="row">
            <div className="col-md-2 pr-0">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 pl-5 py-3" style={{ backgroundColor: '#F4F7FC', height: '100vh' }} >
                <h3>Add Services</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="py-3">
                    <div className="form-row">
                        <div className="col">
                            <input type="email" name="email" ref={register({ required: true })} class="form-control " placeholder="By default rezafset@gmail.com and programming.hero.instructor@gmail.com" />
                            {errors.email && <span className="error text-danger">Email is required</span>}
                        </div>
                        <div className="col">
                            <button className="btn btn-success text-light brand-button">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;