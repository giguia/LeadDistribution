import React from 'react'
import LeadDetails from '../leadgen components/LeadDetails';
import LeadSidebar from '../leadgen components/LeadSidebar';
const LeadsList = () => {
    return (
        <div className="EditForm">
            <LeadDetails/>
            <LeadSidebar/>
        </div>
    );
}

export default LeadsList