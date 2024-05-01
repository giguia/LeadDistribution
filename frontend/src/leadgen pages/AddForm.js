import React from 'react';
import LeadForm from '../leadgen components/LeadForm'
import LeadSidebar from '../leadgen components/LeadSidebar';
const AddForm = () => {
    return (
        <div className="maincontent">
            <div className="AddForm">
            <LeadSidebar/>
            <LeadForm />
            </div>
        </div>
    );
}

export default AddForm
