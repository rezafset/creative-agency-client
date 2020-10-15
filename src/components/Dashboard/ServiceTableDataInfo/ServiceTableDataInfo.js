import React from 'react';
import ServiceTableShortList from '../SeviceTableShortList/ServiceTableShortList';

const ServiceTableDataInfo = ({serviceTableData}) => {
    return (
        <div>
            <h3>Services List</h3>
            {
                serviceTableData.length ? 
                <ServiceTableShortList serviceTableData={serviceTableData}></ServiceTableShortList>
                :
                <div className="p-4">
                    <h4 className="lead text-center">No Data Found</h4>
                </div>
            }
        </div>
    );
};

export default ServiceTableDataInfo;