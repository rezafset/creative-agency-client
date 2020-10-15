import React, { useState } from 'react';
import { useEffect } from 'react';
import ServiceTableDataInfo from '../ServiceTableDataInfo/ServiceTableDataInfo';
import Sidebar from '../SideBar/Sidebar';

const ServiceTableData = () => {
    const [serviceTableData, setServiceTableData] = useState([]);
    useEffect(() => {
        fetch('https://vast-basin-43815.herokuapp.com/fullOrderList')
            .then(response => response.json())
            .then(data => setServiceTableData(data))
    }, [])

    return (
        <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-2 pr-0 pl-0">
                <Sidebar></Sidebar>
            </div>
            <div className="col-lg-10 col-md-8 col-sm-8 col-xs-10 pl-5" style={{ backgroundColor: '#F4F7FC', height: '100vh' }} >
                <ServiceTableDataInfo serviceTableData={serviceTableData}></ServiceTableDataInfo>
            </div>
        </div>
    );
};

export default ServiceTableData;